import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { SearchHauseComponent } from './search-hause/search-hause.component';
import { MapsComponent } from './maps/maps.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { FormUsersComponent } from './form-users/form-users.component';
import { FormHouseComponent } from './form-house/form-house.component';

import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { HouseDetailComponent } from './house-detail/house-detail.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations:[
    AppComponent,
    SearchHauseComponent,
    MapsComponent,
    FormUsersComponent,
    FormHouseComponent,
    HomeComponent,
    UserComponent,
    HouseDetailComponent,
    LoginComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
