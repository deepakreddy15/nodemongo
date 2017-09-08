import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from "@angular/http";
import {TmoviedataComponent} from "../tmoviedata/tmoviedata.component";

@Component({
  selector: 'app-user-review',
  templateUrl: './user-review.component.html',
  styleUrls: ['./user-review.component.css']
})
export class UserReviewComponent implements OnInit {
  private UserDetails={
    UserName:'',
    MovieName:'',
    Comment:'',
    Like:'',
    DisLike:''
  }
  private count:number=0;
  private Decount:number=0;
  private url='http://localhost:8090/add_movie'
  private movies:any=[];
  constructor(private http:Http, private TmoviedataComponent:TmoviedataComponent) { }



  ngOnInit() {
    this.TmoviedataComponent.tMovieData().subscribe(movie=>{
     this.movies=movie;
     console.log("movies"+ movie)

    })
  }
  getReview(){

    console.log(this.UserDetails.UserName+ ""+ this.UserDetails.MovieName+ ""+ this.UserDetails.Comment + ""+this.UserDetails.Like +""+this.UserDetails.DisLike);
    let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });
    this.http.post(this.url,JSON.stringify({UserName: this.UserDetails.UserName,
      MovieName:this.UserDetails.MovieName,
      Comment:this.UserDetails.Comment,
      Like:this.UserDetails.Like,
      DisLike:this.UserDetails.DisLike}),{headers: headers}).subscribe(data => {

      console.log(data);
    }, error => {
      console.log(JSON.stringify(error.json()));
    })
    this.UserDetails.UserName='';
    this.UserDetails.MovieName='';
    this.UserDetails.Comment='';
    //alert("thanks for your feedback...")

  }

  countIncrement(){
    this.UserDetails.Like="Liked";
    this.count=this.count+1;
    console.log(this.count);
  }

  countDecrement(){
    this.UserDetails.Like="DisLiked";
    this.Decount=this.Decount+1;
    console.log(this.Decount);
  }
}
