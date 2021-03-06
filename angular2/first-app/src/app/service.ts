import { Injectable} from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class MovieUpdate {
  private url = 'app.json';
  public name;

  constructor(private http: Http) {

  }

  getDetails() {
    return this.http.get(this.url)
      .map((res: Response) =>
        res.json()
      );
  }


}
