import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Http, Headers, Response } from '@angular/http';
import { from } from 'rxjs/observable/from';



@Injectable()
export class ApiService {
    constructor(private http: Http) {

    }

}