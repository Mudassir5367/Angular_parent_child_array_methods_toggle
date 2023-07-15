import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArrayComponent } from './array/array.component';
import { ChildComponent } from './child/child.component';
import { Child1Component } from './child1/child1.component';
import { SwitchStatementComponent } from './switch-statement/switch-statement.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ToggleComponent } from './toggle/toggle.component';
import { ValidationFormComponent } from './validation-form/validation-form.component';

const routes: Routes = [
  {
    path: 'app-array', component: ArrayComponent,
  },
  {
    path: 'app-child', component: ChildComponent,
  },
  {
    path: 'app-child1', component: Child1Component,
  },
  {
    path: 'app-switch-statement', component: SwitchStatementComponent,
  },
  {
    path: 'app-toggle', component: ToggleComponent,
  },
  {
    path: 'app-template-form', component: TemplateFormComponent,
  },
  {
    path: 'app-validation-form', component: ValidationFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
