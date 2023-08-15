import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
// ng Prime Modules
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ToastModule } from 'primeng/toast';
import { InputSwitchModule } from 'primeng/inputswitch';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    InputTextModule,
    PasswordModule,
    PanelModule,
    ButtonModule,
    TableModule,
    DialogModule,
    ProgressSpinnerModule,
    ToastModule,
    InputSwitchModule,
  ],
})
export class SharedModule {}
