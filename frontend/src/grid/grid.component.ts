import { Component, Input, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { ColDef, GridOptions } from 'ag-grid';
import { GridService } from './grid.service';
import { Subscription } from 'rxjs';
import { forkJoin } from 'rxjs/observable/forkJoin';

import { GRID_CONFIG } from './grid.config';

require('./grid.component.scss');

@Component({
    selector: 'grid-comp',
    templateUrl: './grid.component.html',
})

export class GridComponent {
    gridOptions: GridOptions;
    subscriptions: Subscription[];
    
    constructor(
        private GridService: GridService
    ) {}

    ngOnInit(){
        this.subscriptions = [];
    
        this.gridOptions = {
            columnDefs: GRID_CONFIG.COLUMN_DEFS,
            rowData: []
        }

    }

    ngAfterViewInit(){
        const calls = [
            this.GridService.getAllMockPlaylists(),
            this.GridService.getAllMockSongs()
        ];
        this.subscriptions.push(forkJoin(...calls).subscribe((data) => {
            const playlists = data[0];
            const songs = data[1];
            this.gridOptions.api.setRowData(songs.Songs);
        }))

    }


    ngOnDestroy(){
        if (this.subscriptions) {
            this.subscriptions.forEach((s) => s.unsubscribe());

        }
        this.subscriptions.length = 0;
    }
    
    

}