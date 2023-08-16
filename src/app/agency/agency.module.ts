import { NgModule } from '@angular/core';
import { AgencyRoutingModule } from './agency-routing.module';
import { AdminComponent } from './pages/admin/admin.component';
import { SharedModule } from '../shared/shared/shared.module';
import { RoomsComponent } from './pages/rooms/rooms.component';

@NgModule({
  declarations: [AdminComponent, RoomsComponent],
  imports: [AgencyRoutingModule, SharedModule],
})
export class AgencyModule {}
