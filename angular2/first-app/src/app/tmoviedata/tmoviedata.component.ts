import {Component, Injectable, OnInit} from '@angular/core';
import { Http, Response } from "@angular/http";
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch'
@Injectable()
export class TmoviedataComponent implements OnInit {


  private url='http://localhost:8080/telugucinema';
  constructor(private http: Http) {

  }

  ngOnInit() {
  }
tMovieData(){
    return this.http.get(this.url).map((res:Response)=>     res.json()
  )
}
}
