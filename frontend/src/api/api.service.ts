import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Http, Headers, Response } from '@angular/http';
import { from } from 'rxjs/observable/from';
import { getAllOrdered, getPlaylists } from './JSON/util'


@Injectable()
export class ApiService {
    constructor(private http: Http) {

    }

    getAllPlaylists() {
        return getAllOrdered();
    }

    getOrderedPlaylistJSON() {
        return getPlaylists();
    }
}