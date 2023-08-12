import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

import { AgencyRoutingModule } from './agency-routing.module';
import { AdminComponent } from './pages/admin/admin.component';

@NgModule({
  declarations: [AdminComponent],
  imports: [CommonModule, AgencyRoutingModule, ButtonModule],
})
export class AgencyModule {}
