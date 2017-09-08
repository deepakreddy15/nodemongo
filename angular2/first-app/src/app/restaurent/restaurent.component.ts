import { Component, OnInit } from '@angular/core';
import {Http, Headers} from "@angular/http";

@Component({
  selector: 'app-restaurent',
  templateUrl: './restaurent.component.html',
  styleUrls: ['./restaurent.component.css']
})
export class RestaurentComponent implements OnInit {
private Restaurent={
  Email:'',
  FoodType:'',
  Feedback:''
}
  constructor(private http:Http) { }
  private url='http://localhost:8080/Restaurents-Review'

  ngOnInit() {
  }
  submitreview(){
  console.log(this.Restaurent)
    console.log(this.Restaurent.Email+ ""+ this.Restaurent.FoodType+ ""+ this.Restaurent.Feedback + "");
    let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });
    this.http.post(this.url,JSON.stringify({Email: this.Restaurent.Email,
      FoodType:this.Restaurent.FoodType,
      Feedback:this.Restaurent.Feedback,
      }),{headers: headers}).subscribe(data => {

      console.log(data);
    }, error => {
      console.log(JSON.stringify(error.json()));
    })
  }

}
