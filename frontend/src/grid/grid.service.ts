import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';

@Injectable()
export class GridService {
    constructor(
        private ApiService: ApiService
    ) { }

    getPlaylists() {
        return this.ApiService.getAllPlaylists();
    }
}