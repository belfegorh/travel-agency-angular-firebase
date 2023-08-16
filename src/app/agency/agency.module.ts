import { NgModule } from '@angular/core';
import { AgencyRoutingModule } from './agency-routing.module';
import { AdminComponent } from './pages/admin/admin.component';
import { SharedModule } from '../shared/shared/shared.module';
import { RoomsComponent } from './pages/rooms/rooms.component';
import { HotelsComponent } from './pages/hotels/hotels.component';

@NgModule({
  declarations: [AdminComponent, RoomsComponent, HotelsComponent],
  imports: [AgencyRoutingModule, SharedModule],
})
export class AgencyModule {}
