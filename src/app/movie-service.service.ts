import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export class Movie{

  movieId:number;
  movieName:string;
  movieGenre:string;
  movieDirector:string;
  movieLength:string;
  languages:string;
  movieReleaseDate:Date;
  constructor(movieId:number,movieName:string, movieGenre:string, movieDirector:string, movieLength:string, languages:string,movieReleaseDate:Date){
          this.movieId=movieId;
          this.movieName=movieName;
          this.movieGenre=movieGenre;
          this.movieDirector=movieDirector;
          this.movieLength=movieLength;
          this.languages=languages;
          this.movieReleaseDate=movieReleaseDate;
      }
}

@Injectable({ 
  providedIn: 'root'
})
export class MovieServiceService {
  add(movie: any) {
    throw new Error("Method not implemented.");
  }

  constructor(private http:HttpClient) { }

  m:Movie;

  public addMovie(m){
    console.log(m);
    return this.http.post("http://localhost:6000/add/movie",m,{responseType: 'json'});
  }


}