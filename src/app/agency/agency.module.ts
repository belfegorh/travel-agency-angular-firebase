import { NgModule } from '@angular/core';
import { AgencyRoutingModule } from './agency-routing.module';
import { AdminComponent } from './pages/admin/admin.component';
import { SharedModule } from '../shared/shared/shared.module';

@NgModule({
  declarations: [AdminComponent],
  imports: [AgencyRoutingModule, SharedModule],
})
export class AgencyModule {}
