import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from './logo/logo.component';
import { ErrorComponent } from './error/error.component';
import { MaterialModule } from '../material/material.module';
import { LoadingComponent } from './loading/loading.component';
import { CardComponent } from './card/card.component';
import { DividerComponent } from './divider/divider.component';
import { ConfirmDeleteComponent } from './confirm-delete/confirm-delete.component';
import { ErrorRoutingComponent } from './error-routing/error-routing.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [LogoComponent, ErrorComponent, LoadingComponent, CardComponent, DividerComponent, ConfirmDeleteComponent, ErrorRoutingComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports: [
    LogoComponent,
    ErrorComponent,
    LoadingComponent,
    CardComponent,
    DividerComponent,
    ConfirmDeleteComponent,
    ErrorRoutingComponent
  ]
})
export class GenericModule { }
