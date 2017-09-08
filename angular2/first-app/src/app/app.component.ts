import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  display:boolean= false
  title = 'app';
  constructor(private router: Router){}
  reviewPageMovie(){
    this.router.navigateByUrl('/user-review')
  }
  reviewPageRestaurents(){
    this.router.navigateByUrl('/Restaurents-Review')
  }
  reviewPageLocations(){
    this.router.navigateByUrl('/Location-review')
  }
  insertMovies(){
    this.router.navigateByUrl('/tcinema')
    this.display=true;
  }

}
