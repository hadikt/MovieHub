import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './pages/search/search.component';
import { MovieDetailsComponent } from './pages/movie-details/movie-details.component';
import { BarsComponent } from './pages/bars/bars.component';
import { DetailsComponent } from './pages/details/details.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'search/:id',component:SearchComponent},
  {path:'bars',component:BarsComponent},
  {path:'details/:show/:id',component:DetailsComponent  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
