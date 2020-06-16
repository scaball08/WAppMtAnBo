import { FormLayoutComponent } from './form-layout/form-layout.component';
import { CardsGridComponent } from './cards-grid/cards-grid.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'card', component: CardsGridComponent },
  { path: 'login', component: LoginComponent },
  { path: 'form', component: FormLayoutComponent },
  { path: '', pathMatch: 'full', redirectTo: 'login' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComponentsRoutingModule {}
