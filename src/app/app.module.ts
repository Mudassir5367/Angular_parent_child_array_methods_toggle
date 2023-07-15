import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from "@angular/forms";
import { ChildComponent } from './child/child.component';
import { Child1Component } from './child1/child1.component';
import { SwitchStatementComponent } from './switch-statement/switch-statement.component';
import { ToggleComponent } from './toggle/toggle.component';
import { ArrayComponent } from './array/array.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ValidationFormComponent } from './validation-form/validation-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    Child1Component,
    SwitchStatementComponent,
    ToggleComponent,
    ArrayComponent,
    TemplateFormComponent,
    ValidationFormComponent,
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
