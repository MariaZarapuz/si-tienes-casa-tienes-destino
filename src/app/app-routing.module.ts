import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchHauseComponent } from './search-hause/search-hause.component';



const routes: Routes = [
  {path : '', pathMatch: 'full', redirectTo:'search'},
  {path: 'search', component: SearchHauseComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
