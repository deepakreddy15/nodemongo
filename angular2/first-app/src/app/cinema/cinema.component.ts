import { Component, OnInit } from '@angular/core';
import {MoviesDataComponent} from '../movies-data/movies-data.component';
import { Router} from "@angular/router"
import {isBoolean} from "util";
import {UserReviewComponent} from '../user-review/user-review.component'

@Component({
  selector: 'app-cinema',
  templateUrl: './cinema.component.html',
  styleUrls: ['./cinema.component.css']
})
export class CinemaComponent implements OnInit {
name1=false;
name2='';
age=24;
button:boolean=false;
  private movies:any=[]
  private images=[{
    image_url:'Image loading...',
    name:'Fida'
  },{
    image_url:'Image loading...',
    name:'Arjun Reddy'
  },{
    image_url:'Image loading...',
    name:'Ninnu Kori'
  },{
    image_url:'Image loading...',
    name:'Sye Ra Narsimha Reddy'
  }]
  constructor( private movieinfo: MoviesDataComponent, private router: Router) {
    this.name2 = "Deepakreddy";
  }

  ngOnInit() {
    this.movieinfo.getMoviInfo().subscribe(movies => {
        return this.movies=movies;
        //console.log(movies[1].title);
    }
    )
     }
     reviewPage(){
       this.router.navigateByUrl('/user-review')
     }

}
