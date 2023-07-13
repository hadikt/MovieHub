import { Component, OnInit } from '@angular/core';
import { MovieAPIService } from '../service/movie-api.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
constructor( public service:MovieAPIService ){}
bannerApiData:any=[];
  ngOnInit(): void {

  }



}
