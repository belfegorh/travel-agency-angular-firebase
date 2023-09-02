import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

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
import { TooltipModule } from 'primeng/tooltip';
import { InputNumberModule } from 'primeng/inputnumber';
import { DropdownModule } from 'primeng/dropdown';
import { TagModule } from 'primeng/tag';
import { MenubarModule } from 'primeng/menubar';
import { DataViewModule } from 'primeng/dataview';
import { RatingModule } from 'primeng/rating';
import { CalendarModule } from 'primeng/calendar';
import { RadioButtonModule } from 'primeng/radiobutton';
import { DividerModule } from 'primeng/divider';

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
    TooltipModule,
    InputNumberModule,
    DropdownModule,
    TagModule,
    MenubarModule,
    DataViewModule,
    RatingModule,
    FormsModule,
    CalendarModule,
    RadioButtonModule,
    DividerModule,
  ],
})
export class SharedModule {}
