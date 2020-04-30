import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddMovieComponent } from './add-movie/add-movie.component';

import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MovieServiceService } from './movie-service.service';

@NgModule({
  declarations: [
    AppComponent,
    AddMovieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [HttpClientModule, MovieServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
