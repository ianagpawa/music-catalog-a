import { Component, Input, Output, EventEmitter, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { ColDef, GridOptions } from 'ag-grid';
import { GridService } from './grid.service';
import { Subscription, Subject } from 'rxjs';
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
    gridModel: Subject<any> = new Subject();
    
    
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
            enableSorting: true,
            enableColResize: true,
            animateRows: true,
            floatingFilter: true,
            defaultColDef: {
                floatingFilterComponentParams: {
                    suppressFilterButton: true
                },
                suppressMenu: true
            },
            onFilterChanged: () => {
                this.updateGridModel();
            },
            onSortChanged: () => {
                this.updateGridModel();
            }
        } as GridOptions;

    }

    ngAfterViewInit(){
        const calls = [
            this.GridService.getAllMockPlaylists(),
            this.GridService.getAllMockSongs()
        ];
        this.subscriptions.push(forkJoin(...calls).subscribe((data) => {
            let listing = data[0].Playlists;
            let songs = data[1].Songs.map((song: Song) => {
                song.playlist_id = listing.find((playlist: Playlist) => {
                    return playlist.id === song.playlist_id;
                }).name;

                song.time_created = this.getFormattedDate(song.time_created);
                return song;
            }).reverse();
            this.gridOptions.api.setRowData(songs);
            this.GridService.setSongList(this.gridOptions.api.getModel());
        }));
    }


    ngOnDestroy(){
        if (this.subscriptions) {
            this.subscriptions.forEach((s) => s.unsubscribe());
        }
        this.subscriptions.length = 0;
    }
    
    updateGridModel(): void {
        this.GridService.setSongList(this.gridOptions.api.getModel());
    }

    // TODO
    getFormattedDate(date: Date) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const time = new Date(date);
        // return time.to("en-US", options);
        // return Date.parse(time)
        return time;
    }
}