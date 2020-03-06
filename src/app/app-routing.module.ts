import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormUsersComponent } from './form-users/form-users.component';
import { FormHouseComponent } from './form-house/form-house.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { HouseDetailComponent } from './house-detail/house-detail.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'user/register', component: FormUsersComponent },
  { path: 'house/register', component: FormHouseComponent },
  { path: 'home', component: HomeComponent },
  { path: 'user', component: UserComponent },
  { path: 'house-detail', component: HouseDetailComponent },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
