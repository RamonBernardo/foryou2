import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from'rxjs/Observable';
import 'rxjs/add/operator/map';

/*
  Generated class for the ServiceRoviderProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServiceRoviderProvider {
	api: string='http://localhost:3306/api/api';

  constructor(public http: HttpClient) {}
  getData(){return this.http.get(this.api+'apiRecupera.php');
  }
}
