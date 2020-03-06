import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormUsersComponent } from './form-users/form-users.component';
import { FormHouseComponent } from './form-house/form-house.component';

import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { HouseDetailComponent } from './house-detail/house-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    FormUsersComponent,
    FormHouseComponent,
    HomeComponent,
    UserComponent,
    HouseDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
