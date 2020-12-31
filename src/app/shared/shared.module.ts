import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NavbarComponent } from './navbar/navbar.component';
import { AsideComponent } from './aside/aside.component';
import { MaterialModule } from './material/material.module';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

const MODULES = [
  MaterialModule,
  FlexLayoutModule,
  RouterModule,
  ReactiveFormsModule,
  FormsModule
]

const COMPONENTS = [
  NavbarComponent, 
  AsideComponent
]

@NgModule({
  declarations: [NavbarComponent, AsideComponent],
  imports: [
    CommonModule,
    ...MODULES
  ],
  exports: [
    ...MODULES,
    ...COMPONENTS
  ]
})
export class SharedModule { }
