import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header.component';
import { GenericModule } from '../generic/generic.module';
import { SidenavOptionsComponent } from './sidenav-options/sidenav-options.component';
import { SidenavLinksComponent } from './sidenav-links/sidenav-links.component';
import { SidenavUserComponent } from './sidenav-user/sidenav-user.component';



@NgModule({
  declarations: [HeaderComponent, SidenavOptionsComponent, SidenavLinksComponent, SidenavUserComponent],
  imports: [
    CommonModule,
    GenericModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    SidenavOptionsComponent
  ]
})
export class HeaderModule { }
