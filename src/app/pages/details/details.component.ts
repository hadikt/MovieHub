import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie,movieDetails } from 'model';
import { Observable, switchMap } from 'rxjs';
import { MovieAPIService } from 'src/app/service/movie-api.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})

export class DetailsComponent implements OnInit{
  id!:number
  media_type!:string
  movies:any

@Input() movieData?:Movie
imageUrl: string = 'https://image.tmdb.org/t/p/w500/';
  imageUrl1: string = 'https://image.tmdb.org/t/p/original/';
  base_img='https://image.tmdb.org/t/p/'
$movieDetails?:Observable<movieDetails>
  constructor(private movie:MovieAPIService,private active:ActivatedRoute){
    this.active.params.subscribe(val=>{
      this.id = val['id']
      this.media_type=val['show']


    })
    console.log(this.id);

    this.movie.movieDetails(this.id).subscribe(val=>{
      console.log(val);
      this.movies=val

    })
  }
  ngOnInit(): void {

    // this.$movieDetails=this.active.params.pipe(switchMap((params=>this.movie.movieDetails(params['id']))))
    // this.$movieDetails.subscribe
  }

}
