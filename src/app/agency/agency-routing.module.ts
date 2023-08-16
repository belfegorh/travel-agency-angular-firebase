import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './pages/admin/admin.component';
import { RoomsComponent } from './pages/rooms/rooms.component';
import { HotelsComponent } from './pages/hotels/hotels.component';

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
        redirectTo: 'hotels',
        pathMatch: 'full',
      },
      {
        path: 'roms/:hoteluid',
        component: RoomsComponent,
      },
      {
        path: 'hotels',
        component: HotelsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgencyRoutingModule {}
