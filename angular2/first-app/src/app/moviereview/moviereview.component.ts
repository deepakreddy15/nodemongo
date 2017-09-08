import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params } from "@angular/router";
import { Http, Headers, Response } from "@angular/http";
import { TmoviedataComponent } from "../tmoviedata/tmoviedata.component";

@Component({
  selector: 'app-moviereview',
  templateUrl: './moviereview.component.html',
  styleUrls: ['./moviereview.component.css']
})
export class MoviereviewComponent implements OnInit {
  private Mname;
  private url = "http://localhost:8080/UpdateDocument";
  private Review_Data = {
    Rate: '',
    Like: 0,
    DisLike: 0,
    Comment: ''

  }
  count = 0;
  dcount = 0;
  User_L_D_C=[];

  constructor(private router: ActivatedRoute, private http: Http, private tmoviedata:TmoviedataComponent) {

  }

  ngOnInit() {
    this.Mname = this.router.snapshot.params["MName"];
    console.log(this.Mname);
    this.tmoviedata.tMovieData().subscribe((res)=>{
          this.User_L_D_C=res;
    })

  }

  countIncrement() {
    this.Review_Data.Like = this.Review_Data.Like + 1;
    console.log(this.Review_Data.Like);


  }

  countDecrement() {
    this.Review_Data.DisLike = this.Review_Data.DisLike + 1;
    console.log(this.Review_Data.DisLike)
  }

  submitMoviereview() {
    let headers = new Headers({'Content-Type': 'application/json;charset=utf-8'});
    console.log(this.Review_Data.Rate + " "+ this.Review_Data.Like+" "+ this.Review_Data.Comment )
    this.http.post(this.url, JSON.stringify({

      Mname:this.Mname,
      Rate: this.Review_Data.Rate,
      Comment: this.Review_Data.Comment,
      Like: this.Review_Data.Like,
      DisLike: this.Review_Data.DisLike
    }), {headers: headers}).subscribe(data => {
      console.log(data);

    }, error =>
      console.log(JSON.stringify(error.json())));

  }
}
