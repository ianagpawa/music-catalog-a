import { Injectable, EventEmitter } from '@angular/core';
import { ApiService } from '../api/api.service';
import { BehaviorSubject, Subject, Subscription } from 'rxjs';

@Injectable()
export class GridService {
    selectedSong: BehaviorSubject<any> = new BehaviorSubject({});
    selectedSongStatus = this.selectedSong.asObservable();

    listOfSongs: Subject<any> = new Subject();

    constructor(
        private ApiService: ApiService
    ) { 
        
    }

    getAllMockPlaylists() {
        return this.ApiService.getAllMockPlaylists();
    }

    getAllMockSongs() {
        return this.ApiService.getAllMockSongs();
    }

    setSelectedSong(rowData: any) {
        this.selectedSong.next(rowData)
    }

    setSongList(data: any) {
        return this.listOfSongs.next(data);
    }

}