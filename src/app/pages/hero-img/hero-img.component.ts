import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { MovieAPIService } from 'src/app/service/movie-api.service';

@Component({
  selector: 'app-hero-img',
  templateUrl: './hero-img.component.html',
  styleUrls: ['./hero-img.component.scss']
})
export class HeroImgComponent {
  movies!: any
  base_img='https://image.tmdb.org/t/p/'

  constructor(private service:MovieAPIService,private http:HttpClient){}
  ngOnInit() {
    this.movies=this.service.getTime('movie','day',);
    console.log(this.movies);


  }

  customOptions: OwlOptions = {
    loop: true,
    navSpeed: 400,
    autoplay:true,
    dots:false,
    navText:['',''],

    nav:false,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
  }


}
