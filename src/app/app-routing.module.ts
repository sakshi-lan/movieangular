import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddMovieComponent } from './add-movie/add-movie.component';



const routes: Routes = [
  {path:'Add-movie', component:AddMovieComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
