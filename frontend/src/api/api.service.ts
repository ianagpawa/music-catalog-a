import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Http, Headers, Response } from '@angular/http';
import { of } from 'rxjs/observable/of';
const PLAYLISTS = require('./JSON/PLAYLISTS.json')
const SONGS = require('./JSON/SONGS.json');


@Injectable()
export class ApiService {
    constructor(private http: Http) {

    }

    getAllMockPlaylists(): Observable<any> {
        return of(PLAYLISTS);
    }

    getAllMockSongs(): Observable<any> {
        return of(SONGS)
    }
}