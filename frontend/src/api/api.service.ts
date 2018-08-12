import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Http, Headers, Response } from '@angular/http';
import { from } from 'rxjs/observable/from';

const HAPPENSTANCE = require('./JSON/1-Happenstance.json')
const ANNICA = require('./JSON/2-Annica.json');
const MOBIUROBOROS = require('./JSON/3-Mobiuroboros.json');
const PORTMANTEU = require('./JSON/4-Portmanteu.json');
const NOSTALGIA = require('./JSON/5-Nostalgia.json');
const HOWLIN = require('./JSON/6-Howlin.json');
const FOREIGN = require('./JSON/7-Foreign.json');
const RAPTASTIC = require('./JSON/8-Raptastic.json');
const SOUNDSCAPE = require('./JSON/9-Soundscape.json');

@Injectable()
export class ApiService {
    constructor(private http: Http) {

    }

    getHappenstance() {
        console.log(HAPPENSTANCE)
    }
    // getHappenstance(): Observable<any> {
    //     return new Observable(HAPPENSTANCE)
    // }
}