import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/guards/auth-guard-login.guard';
import { AuthGuardUser } from './auth/guards/auth-guard-user.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'agency',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'agency',
    loadChildren: () =>
      import('./agency/agency.module').then((m) => m.AgencyModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'traveler',
    loadChildren: () =>
      import('./traveler/traveler.module').then((m) => m.TravelerModule),
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
