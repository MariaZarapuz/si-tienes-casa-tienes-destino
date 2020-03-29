import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FormUsersComponent } from './form-users/form-users.component';
import { FormHouseComponent } from './form-house/form-house.component';
import { SearchComponent } from './search/search.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { HouseDetailComponent } from './house-detail/house-detail.component';
import { LoginComponent } from './login/login.component';
import { MapsComponent } from './maps/maps.component';
import { PuntosPipe } from './puntos.pipe';
import { AgmCoreModule } from '@agm/core';



@NgModule({
  declarations: [
    AppComponent,
    FormUsersComponent,
    FormHouseComponent,
    HomeComponent,
    UserComponent,
    HouseDetailComponent,
    LoginComponent,
    SearchComponent,
    MapsComponent,
    PuntosPipe,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB9CobDD06h6vgzmUpmoKIpCgSXc43B7B0'
    })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
