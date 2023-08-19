import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TravelerRoutingModule } from './traveler-routing.module';
import { AdminComponent } from './pages/admin/admin.component';
import { SharedModule } from '../shared/shared/shared.module';
import { ReserveComponent } from './pages/reserve/reserve.component';
import { BookingsComponent } from './pages/bookings/bookings.component';

@NgModule({
  declarations: [AdminComponent, ReserveComponent, BookingsComponent],
  imports: [CommonModule, TravelerRoutingModule, SharedModule],
})
export class TravelerModule {}
