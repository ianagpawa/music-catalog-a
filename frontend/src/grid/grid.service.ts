import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';

@Injectable()
export class GridService {
    constructor(
        private ApiService: ApiService
    ) { }

    getAllSongs() {
        return this.ApiService.getAllPlaylists();
    }

    getPlaylists() {
        return this.ApiService.getOrderedPlaylistJSON();
    }
}