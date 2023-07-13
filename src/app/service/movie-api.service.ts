import { Injectable, importProvidersFrom } from '@angular/core';
import { HttpClient}from '@angular/common/http'
import { Observable,pipe,map, BehaviorSubject, Subject } from 'rxjs';
import { Movie,Movies, movieDetails } from 'model';
import { popular,PopularMovies } from 'popular';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
@Injectable({
  providedIn: 'root'
})
export class MovieAPIService {

  isBar = false


  barFunction(){

    this.isBar=!this.isBar

  }

  get(URL: string) {
    throw new Error('Method not implemented.');
  }
  // baseurl = 'https://api.themoviedb.org/3/';
  base_url = 'https://api.themoviedb.org/3';

  Apikey='8771c3af5561cf81f655020b572d5f48'

  movies: any;
  constructor( private http:HttpClient) { }
  showdetails?:'week'|'day';

//bannerAPI
// trending():Observable<Movie[]>{
//   return this.http.get <Movies> (`${this.baseurl}/trending/all/day`,{
//     params:{
//       api_key:this.Apikey
//     }
//   }).pipe(map(res => res.results))
// }

getCategory(category:'tv'|'movie'):Observable<any[]> {
  return this.http.get<any>(`${this.base_url}/${category}/popular`, {
    params: {
      api_key: this.Apikey
    }
  }).pipe(map(res => res.results))
}

getTime(category:'tv'|'movie',time: 'day' | 'week'): Observable<any[]> {
  return this.http
    .get<any>(`${this.base_url}/trending/${category}/${time}`, {
      params: {
        api_key: this.Apikey,
      }
    })
    .pipe(
      map((res) => res.results )
    );
}
// id$ = new Subject<number>()

//....................................................................Trending..........................................................\
trendingMovie(data:'day'|'week'):Observable<Movie[]>{
  console.log('hiiiii');

  console.log(data);

  this.showdetails=data
  return this.http.get <Movies> (`${this.base_url}/trending/movie/${data}`,{
    params:{
      api_key:this.Apikey
    }
  }).pipe(map(res=>res.results))

}
//...................................................................popular...........................................................
popularMovie():Observable<Movie[]>{
  return this.http.get <Movies>(`${this.base_url}/movie/popular`,{
    params:{
      api_key:this.Apikey
    }
  }).pipe(map(res=>res.results))

}
// ......................................................................Moviedetails......................................................
movieDetails(id?:any):Observable<movieDetails>{
return this.http.get<movieDetails>(`${this.base_url}/movie/${id}`,{

  params:{
    api_key:this.Apikey
  }
})
.pipe(map((res)=>{

  return res
}))
}
//.....................................................................single id

}
