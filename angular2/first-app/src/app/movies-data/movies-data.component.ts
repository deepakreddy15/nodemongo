import {Component, Injectable, OnInit} from '@angular/core';
import { Http, Response } from "@angular/http";
import {Observable} from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class MoviesDataComponent implements OnInit {
  private url= 'http://localhost:8090/movies';
  constructor(private http:Http) {

  }

  ngOnInit() {


  }
getMoviInfo(){
  return this.http.get(this.url).map((res:Response) =>  res.json())
  //...errors if any
    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
}
}
