import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

import { Planet } from '../models/planet.model';

@Injectable({
  providedIn: 'root'
})
export class PlanetService {

  planets: Planet[] = [{"name":"Donlon","distance":100},
                       {"name":"Enchai","distance":200},
                       {"name":"Jebing","distance":300},
                       {"name":"Sapir","distance":400},
                       {"name":"Lerbin","distance":500},
                       {"name":"Pingasor","distance":600}];

  constructor(private http: Http) {}



}
