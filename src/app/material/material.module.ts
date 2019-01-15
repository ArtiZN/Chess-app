import { NgModule } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  exports: [
    MatMenuModule,
    MatTableModule
  ],
  declarations: []
})
export class MaterialModule { }
