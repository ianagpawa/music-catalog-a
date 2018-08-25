import { Component, Input, Output, EventEmitter, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { ColDef, GridOptions } from 'ag-grid';
import { GridService } from './grid.service';
import { Subscription } from 'rxjs';
import { forkJoin } from 'rxjs/observable/forkJoin';

import { Song, Playlist } from '../root/root.interfaces';

import { GRID_CONFIG } from './grid.config';

require('./grid.component.scss');

@Component({
    selector: 'grid-comp',
    templateUrl: './grid.component.html',
})

export class GridComponent {
    gridOptions: GridOptions;
    subscriptions: Subscription[];
    playlists: any;
    
    
    constructor(
        private GridService: GridService
    ) {}

    ngOnInit(){
        this.subscriptions = [];
    
        this.gridOptions = {
            columnDefs: GRID_CONFIG.COLUMN_DEFS,
            rowData: [],
            onRowDoubleClicked: (rowData: any) => {
                this.GridService.setSelectedSong(rowData)
            },
            enableSorting: true
        }

    }

    ngAfterViewInit(){
        const calls = [
            this.GridService.getAllMockPlaylists(),
            this.GridService.getAllMockSongs()
        ];
        this.subscriptions.push(forkJoin(...calls).subscribe((data) => {
            this.playlists = data[0].Playlists;
            const songs = data[1].Songs;

            songs.map((song: Song) => {
                song.playlist_id = this.playlists.find((playlist: Playlist) => {
                    return playlist.id === song.playlist_id
                }).name;
                return song;
            })

            this.gridOptions.api.setRowData(songs);
        }))

    }


    ngOnDestroy(){
        if (this.subscriptions) {
            this.subscriptions.forEach((s) => s.unsubscribe());

        }
        this.subscriptions.length = 0;
    }
    
}