import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { Movie } from 'src/app/Movie';

@Component({
  selector: 'app-movies-card',
  templateUrl: './movies-card.component.html',
  styleUrls: ['./movies-card.component.css']
})
export class MoviesCardComponent implements OnInit {
  movies: Movie[] = []

  constructor(private movieService: MoviesService) { }

  ngOnInit(): void {
    // 
  
    //this.getInTheatres()
    this.movieService.getInTheatres().subscribe((movies) => (this.movies = movies))
    // console.log(this.movies)
  }
// getInTheatres(){
//   this.movieService.getInTheatres().subscribe((movies) => (this.movies = movies.image))
//     console.log(movies)
// } 
}
