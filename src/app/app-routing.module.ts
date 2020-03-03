import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormUsersComponent } from './form-users/form-users.component';
import { FormHouseComponent } from './form-house/form-house.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'user/register', component: FormUsersComponent },
  { path: 'formHouse', component: FormHouseComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
