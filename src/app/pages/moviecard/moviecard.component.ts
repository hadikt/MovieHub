import { Component,Input, OnInit } from '@angular/core';
import { MovieAPIService } from 'src/app/service/movie-api.service';
import { Observable } from 'rxjs';
// import { popular } from 'popular';
import { Movie, movieDetails } from 'model';

@Component({
  selector: 'app-moviecard',
  templateUrl: './moviecard.component.html',
  styleUrls: ['./moviecard.component.scss']
})
export class MoviecardComponent implements OnInit {

  ngOnInit(): void {
    // console.log(this.movieData);

  }

  imageUrl: string = 'https://image.tmdb.org/t/p/w500/';
  imageUrl1: string = 'https://image.tmdb.org/t/p/original/';
  base_img='https://image.tmdb.org/t/p/'
  @Input() movieData?:Movie
}
