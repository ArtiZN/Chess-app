import { MaterialModule } from './../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    NavigationComponent
  ],
  declarations: [NavigationComponent, HomeComponent]
})
export class CoreModule { }
