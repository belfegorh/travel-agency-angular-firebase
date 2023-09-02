import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './pages/admin/admin.component';
import { ReserveComponent } from './pages/reserve/reserve.component';
import { BookingsComponent } from './pages/bookings/bookings.component';
import { BookingComponent } from './pages/booking/booking.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'admin',
    pathMatch: 'full',
  },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: 'bookings',
        pathMatch: 'full',
      },
      {
        path: 'reserve',
        component: ReserveComponent,
      },
      {
        path: 'bookings',
        component: BookingsComponent,
      },
      {
        path: 'booking/:hoteluid',
        component: BookingComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TravelerRoutingModule {}
