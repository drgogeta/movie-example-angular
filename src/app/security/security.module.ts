import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecurityRouting } from './security.routing';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    SecurityRouting,
    SharedModule
  ]
})
export class SecurityModule { }
