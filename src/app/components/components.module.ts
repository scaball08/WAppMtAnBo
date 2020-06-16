import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { CardsGridComponent } from './cards-grid/cards-grid.component';
import { MaterialModule } from '../material-module/material.module';
import { LoginComponent } from './login/login.component';
import { FormLayoutComponent } from './form-layout/form-layout.component';
import { FlexLayoutModule } from "@angular/flex-layout";
import { DefaultComponent } from './layouts/default/default.component';
@NgModule({
  declarations: [CardsGridComponent, LoginComponent, FormLayoutComponent, DefaultComponent],
  imports: [CommonModule, ComponentsRoutingModule, MaterialModule],
})
export class ComponentsModule {}
