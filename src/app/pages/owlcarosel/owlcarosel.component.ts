import { Component, OnInit } from '@angular/core';
import {OwlOptions}from 'ngx-owl-carousel-o';
import { HttpClient } from '@angular/common/http';
import { MovieAPIService } from 'src/app/service/movie-api.service';
import { Observable,subscribeOn,map,throwError,pipe } from 'rxjs';
import { Movie} from 'model';

export interface Movies {
  page: number;
  results: Movie[]
  total_pages: number;
  total_results: number;

}

const URL = `https://api.themoviedb.org/3/movie/upcoming?api_key=8771c3af5561cf81f655020b572d5f48`
const popular=`https://api.themoviedb.org/3/movie/popular?api_key=8771c3af5561cf81f655020b572d5f48`
@Component({
  selector: 'app-owlcarosel',
  templateUrl: './owlcarosel.component.html',
  styleUrls: ['./owlcarosel.component.scss']
})
export class OwlcaroselComponent implements OnInit {
  base_img='https://image.tmdb.org/t/p/'

  constructor( private service:MovieAPIService ,private http:HttpClient){}
  limit: number = 10; // <==== Edit this number to limit API results
  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    center: true,
    dots: false,
    autoHeight: true,
    autoWidth: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      }
    }
  }
  Movies?: any;
  poplar:any;

  ngOnInit() {
    this.http
      .get(URL)
      .pipe(map((res: any) => res['results']))
      .subscribe((moveis) => (this.Movies = moveis));

      this.http
      .get(popular)
      .pipe(map((res: any) => res['results']))
      .subscribe((moveis) => {this.poplar = moveis
        console.log(this.poplar);
      });
  }



}
