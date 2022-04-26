import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectsComponent } from './modules/content/projects/projects.component';
import { StoriesComponent } from './modules/content/stories/stories.component';
import { EpicsComponent } from './modules/content/epics/epics.component';
import { TasksComponent } from './modules/content/tasks/tasks.component';
import { LoginComponent } from './modules/login/login/login.component';
import { HomeComponent } from './modules/content/home/home.component';
import { AuthGuard } from './modules/core/guards/auth-guard.guard';
import { ErrorRoutingComponent } from './modules/generic/error-routing/error-routing.component';
import { SettingsComponent } from './modules/content/settings/settings.component';
import { MyStoriesComponent } from './modules/content/my-stories/my-stories.component';
import { MemberGuard } from './modules/core/guards/member.guard';

const routes: Routes = [
	{ 
		path: "login",
		component: LoginComponent,
	 },
	{ 
		path: "",
		component: HomeComponent, 
		canActivate: [AuthGuard]
	},
	{
		path: "home", 
		component: HomeComponent, 
		canActivate: [AuthGuard]
	},
	{ 
		path: "my-projects", 
		component: ProjectsComponent, 
		canActivate: [AuthGuard]
	},
	{ 
		path: "my-projects/:projectId", 
		component: EpicsComponent, 
		canActivate: [AuthGuard, MemberGuard] 
	},
	{ 
		path: "my-projects/:projectId/:epicId", 
		component: StoriesComponent, 
		canActivate: [AuthGuard, MemberGuard]
	},
	{
		path: "my-projects/:projectId/:epicId/:storyId", 
		component: TasksComponent, 
		canActivate: [AuthGuard, MemberGuard] 
	},
	{ 
		path: "my-stories", 
		component: MyStoriesComponent, 
		canActivate: [AuthGuard] 
	},
	{ 
		path: "settings", 
		component: SettingsComponent, 
		canActivate: [AuthGuard] 
	},
	{
		path: "**", 
		component: ErrorRoutingComponent, 
		canActivate: [AuthGuard] 
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }