import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormUsersComponent } from './form-users/form-users.component';
import { FormHouseComponent } from './form-house/form-house.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { HouseDetailComponent } from './house-detail/house-detail.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'user/register', component: FormUsersComponent },
  { path: 'house/register', component: FormHouseComponent },
  { path: 'user', component: UserComponent },
  { path: 'house-detail', component: HouseDetailComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: 'home' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
