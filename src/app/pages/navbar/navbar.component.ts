import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieAPIService } from 'src/app/service/movie-api.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  constructor(private activerouter: ActivatedRoute , public service:MovieAPIService ,private router:Router){}
truelement: any;
bars: string|any[]|null|undefined;
search?:string;
searchTerm='';
onclick(arg0: any) {
throw new Error('Method not implemented.');
}

// route(){
//   this.router.navigate(['/bars'])
// }
onSubmit(data:NgForm){
  data.reset()
}
searchfuc(id:string){
  if(id)
this.router.navigateByUrl(`/search/`+id)
}
}
