import { Component, OnInit } from '@angular/core';
import {Headers,Http} from "@angular/http"

@Component({
  selector: 'app-tcinemas',
  templateUrl: './tcinemas.component.html',
  styleUrls: ['./tcinemas.component.css']
})
export class TcinemasComponent implements OnInit {
    private CInema={
      Name:'',
      Director:'',
      Starring:'',
      Generes:'',
      Country:'',
      Language:'',
      Trailer:''

    }
    private url='http://localhost:8080/tcinema'
  constructor(private http:Http) {

  }

  ngOnInit() {
  }
  crewdetails(){
    console.log(this.CInema.Name+ ""+ this.CInema.Director+ ""+ this.CInema.Starring + ""+this.CInema.Generes+""+this.CInema.Country
    +""+this.CInema.Language+""+this.CInema.Trailer);
    let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });

    this.http.post(this.url,JSON.stringify({Name: this.CInema.Name,
      Director:this.CInema.Director,
      Starring:this.CInema.Starring,
      Generes:this.CInema.Generes,
      Country:this.CInema.Country,
      Language:this.CInema.Language,
      Trailer:this.CInema.Trailer

    }),{headers: headers}).subscribe(data => {

      console.log(data);
    }, error => {
      console.log(JSON.stringify(error.json()));
    })
    this.CInema.Trailer='';
    this.CInema.Director='';
    this.CInema.Name='';
    this.CInema.Starring='';
    this.CInema.Generes='';
    this.CInema.Language='';
    this.CInema.Country='';
  }
}
