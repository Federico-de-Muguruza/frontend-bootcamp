import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HeaderModule } from '../header/header.module';
import { MaterialModule } from '../material/material.module';
import { GenericModule } from '../generic/generic.module';
import { RouterModule } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
import { StoriesComponent } from './stories/stories.component';
import { EpicsComponent } from './epics/epics.component';
import { TasksComponent } from './tasks/tasks.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SettingsComponent } from './settings/settings.component';
import { MyStoriesComponent } from './my-stories/my-stories.component';

@NgModule({
  declarations: [HomeComponent, ProjectsComponent, StoriesComponent, EpicsComponent, TasksComponent, AddTaskComponent, SettingsComponent, MyStoriesComponent],
  imports: [
    CommonModule,
    HeaderModule,
    MaterialModule,
    GenericModule,
    RouterModule,
    ReactiveFormsModule,
  ],
})
export class ContentModule { }
