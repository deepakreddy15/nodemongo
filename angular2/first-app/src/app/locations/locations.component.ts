import { Component, OnInit } from '@angular/core';
import {Http, Headers} from "@angular/http"

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']

})
export class LocationsComponent implements OnInit {
  private Location = {
    Email: '',
    Location: '',
    Feedback: ''
  }
  private url = 'http://localhost:8080/Location-review';

  constructor(private http:Http) {
  }

  ngOnInit() {
  }

  submitlocationreview() {
    console.log("got it")
    console.log(this.Location.Email+ ""+ this.Location.Location+ ""+ this.Location.Feedback + "");
    let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });

      this.http.post(this.url,JSON.stringify({Email: this.Location.Email,
      Location:this.Location.Location,
      Feedback:this.Location.Feedback,
    }),{headers: headers}).subscribe(data => {

      console.log(data);
    }, error => {
      console.log(JSON.stringify(error.json()));
    })
  }

}
