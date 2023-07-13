import { Component } from '@angular/core';
import { MovieAPIService } from 'src/app/service/movie-api.service';

@Component({
  selector: 'app-bars',
  templateUrl: './bars.component.html',
  styleUrls: ['./bars.component.scss']
})
export class BarsComponent {
  constructor(public service : MovieAPIService){
    console.log('kajdbfhbjf');

  }

  product=[{
    src:'https://api.dicebear.com/6.x/initials/svg?seed=Midnight'},{names:'midnight'},
  {src:'https://api.dicebear.com/6.x/initials/svg?seed=Sophie'},{names:'sopie'},
  {src:'https://api.dicebear.com/6.x/initials/svg?seed=MistY'},{names:'Misty'},
  {src:'https://api.dicebear.com/6.x/initials/svg?seed=Spooky'},{names:'Spooky'},
  {src:'https://api.dicebear.com/6.x/initials/svg?seed=Peanut'},{names:'Peanut'},
  {src:'https://api.dicebear.com/6.x/initials/svg?seed=Muffin'},{names:'muffin'},
  {src:'https://api.dicebear.com/6.x/initials/svg?seed=Zoe'},{names:'Zoe'},
  {src:'https://api.dicebear.com/6.x/initials/svg?seed=Oscar'},{names:'Oascar'},
  {src:'https://api.dicebear.com/6.x/initials/svg?seed=Bubba'},{names:'Bubba'},
  {src:'https://api.dicebear.com/6.x/initials/svg?seed=Lola'},{names:'Lola'},
  {src:'https://api.dicebear.com/6.x/initials/svg?seed=Bear'},{names:'Bear'},
  {src:'https://api.dicebear.com/6.x/initials/svg?seed=Lucky'},{names:'Luky'},
  {src:'https://api.dicebear.com/6.x/initials/svg?seed=Chloe'},{names:'Chloe'},
  {src:'https://api.dicebear.com/6.x/initials/svg?seed=Sasha'},{names:'Sasha'},
  {src:'https://api.dicebear.com/6.x/initials/svg?seed=Kitty'},{names:'kitty'},

  {src:'https://api.dicebear.com/6.x/initials/svg?seed=Samantha'},{names:'Samnta'},
  {src:'https://api.dicebear.com/6.x/initials/svg?seed=Cleo'},{names:'Cleo'},

  {src:'https://api.dicebear.com/6.x/initials/svg?seed=Trouble'},{names:'Trouble'},

  {src:'https://api.dicebear.com/6.x/initials/svg?seed=Pumpkin'},{names:'Pumpkin'},]
}
