import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{CarouselModule}from 'ngx-owl-carousel-o';
import{BrowserAnimationsModule}from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { SearchComponent } from './pages/search/search.component';
import { MovieDetailsComponent } from './pages/movie-details/movie-details.component';
import { HttpClientModule } from '@angular/common/http'
import { MovieAPIService } from './service/movie-api.service';
import { OwlcaroselComponent } from './pages/owlcarosel/owlcarosel.component';
import { HeroImgComponent } from './pages/hero-img/hero-img.component';
import { BarsComponent } from './pages/bars/bars.component';
import { TrendingComponent } from './pages/trending/trending.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { MoviecardComponent } from './pages/moviecard/moviecard.component';
import { DetailsComponent } from './pages/details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    SearchComponent,
    MovieDetailsComponent,
    OwlcaroselComponent,
    HeroImgComponent,
    BarsComponent,
    TrendingComponent,
    MoviecardComponent,
    DetailsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
HttpClientModule,
CarouselModule,
BrowserAnimationsModule,
MatSlideToggleModule,
MatButtonToggleModule

  ],
  providers: [MovieAPIService],
  bootstrap: [AppComponent]
})
export class AppModule { }
