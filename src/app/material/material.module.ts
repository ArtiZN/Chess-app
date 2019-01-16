import { NgModule } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';

@NgModule({
  exports: [
    MatMenuModule,
    MatTableModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatListModule
  ]
})
export class MaterialModule { }
