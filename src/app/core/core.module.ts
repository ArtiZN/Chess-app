import { MaterialModule } from './../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    NavigationComponent,
    HomeComponent
  ],
  declarations: [
    NavigationComponent,
    HomeComponent,
    LoginComponent
  ]
})
export class CoreModule { }
