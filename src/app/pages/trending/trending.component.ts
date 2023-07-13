import { Component, OnInit } from '@angular/core';
import { MovieAPIService } from 'src/app/service/movie-api.service';
import { Movie } from 'model';
import { BehaviorSubject, Observable, combineLatest, map, switchMap, timeInterval } from 'rxjs';
import { popular } from 'popular';
@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.scss']
})


export class TrendingComponent  implements OnInit{
  base_img = 'https://image.tmdb.org/t/p/'
  Switch1!: boolean
  Switch2!: boolean
  Switch3!: boolean

  TrendingMovies?: Observable<Movie[]>;
  PopularMovies?: Observable<Movie[]>;

  $time = new BehaviorSubject<'day' | 'week'>('day');
  $tv = new  BehaviorSubject<'TV' | 'WEEK'>('TV')

  $filter = combineLatest({
    time: this.$time,
    show: this.$tv

  })

constructor(private movieservice:MovieAPIService){}


toggle(data:'day'|'week'){
  this.$time.next(data)
  // console.log(this.$time);

}
  ngOnInit(): void {
    // this.TrendingMovies = this.$filter.pipe(
    //   switchMap(({ time }) => {
    //     return this.movieservice.trendingMovie(time);


    //   })..................................//trending//........................................................
    this.TrendingMovies = this.$filter.pipe(switchMap(({time})=>this.movieservice.trendingMovie(time)))

    // );

// .....................................// popular//............................................................

    this.PopularMovies = this.movieservice.popularMovie();

}
onTime(data: timeInterval) {
  this.$time.next(data);
}
changeTime(current: 'day' | 'week') {
  this.Switch3 = !this.Switch3
  this.$time.next(current == 'week' ? 'day' : 'week')
}
}
type timeInterval = 'day' | 'week';
