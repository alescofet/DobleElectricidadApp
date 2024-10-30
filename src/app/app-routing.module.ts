import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './auth/auth.guard';
import { InvoiceListComponent } from './invoices/invoice-list/invoice-list.component';
import { LoginComponent } from './auth/login/login.component';
import { NgModule } from '@angular/core';
import { ProfileComponent } from './profile/profile/profile.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'invoices', component: InvoiceListComponent, canActivate: [AuthGuard] },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
