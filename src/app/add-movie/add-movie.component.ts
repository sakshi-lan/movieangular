import { Component, OnInit } from '@angular/core';
import { MovieServiceService } from '../movie-service.service';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {
  [x: string]: any;

  constructor(private service:MovieServiceService) { }

  ngOnInit(): void {
  }
  movieRegister(){
    if(this.movie.movieId != 0 && this.movie.movieName != "" && this.movie.movieGenre != "" && this.movie.movieDirector != ""&&  this.movie.movieLength != ""&& this.movie.languages != "" && this.movie.movieReleaseDate != ""){
      this.service.addMovie(this.movie).subscribe((data)=>this.message=data);
    }
    else{
      this.message = "Sorry!! movie was not inserted";
    }
    }
  }

 