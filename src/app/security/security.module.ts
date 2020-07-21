import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecurityRouting } from './security.routing';
import { LoginComponent } from './login';
import { SharedModule } from '../shared';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    SecurityRouting,
    SharedModule
  ]
})
export class SecurityModule { }
