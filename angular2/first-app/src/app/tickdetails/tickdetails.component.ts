import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, Params} from '@angular/router';
import { MovieUpdate } from '../service';
import 'rxjs/Rx';
@Component({
  selector: 'app-tickdetails',
  templateUrl: './tickdetails.component.html',
  providers: [MovieUpdate],
  styleUrls: ['./tickdetails.component.css']
})
export class TickdetailsComponent implements OnInit {
  private movie;
  private details;
  private id;
  private sub;


  constructor( private ActRoute: ActivatedRoute, private movieupdate: MovieUpdate, private router: Router) { }

  ngOnInit() {
       this.movie=this.ActRoute.params.subscribe((params:Params)=>{
         this.movie=parseInt(params['id']);
       })
    this.movieupdate.getDetails().subscribe(response => this.details= response);

  }
  previous(){
    let previousid=this.movie-1;
          this.router.navigate(['ticket', previousid]);

  }
  next(){
    let nextid=this.movie+1;
    this.router.navigate(['ticket', nextid]);

  }
}
