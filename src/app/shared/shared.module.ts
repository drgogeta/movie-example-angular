import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CdkStepperModule } from '@angular/cdk/stepper';
import { CdkScrollableModule } from '@angular/cdk/scrolling';
import { LayoutModule as MaterialLayoutModule } from '@angular/cdk/layout';

import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatOptionModule, MatRippleModule } from '@angular/material/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {
  MatProgressBarModule,
  MatProgressBar,
} from '@angular/material/progress-bar';

import { TemplateComponent } from './template/template.component';

@NgModule({
  declarations: [TemplateComponent],
  imports: [
    CommonModule,

    CdkStepperModule,
    MatButtonModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    MatInputModule,
    MatIconModule,
    MatListModule,
    MatProgressBarModule,
    MatRadioModule,
    MatSnackBarModule,
    MatGridListModule,
    MatMenuModule,
    MaterialLayoutModule,
    CdkScrollableModule,
    MatRippleModule,
    MatTooltipModule,
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,

    CdkStepperModule,
    MatButtonModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatCardModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatProgressBar,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatRadioModule,
    MatSnackBarModule,
    CdkScrollableModule,
    MatRippleModule,
    MatTooltipModule,
    TemplateComponent,
  ],
})
export class SharedModule {}
