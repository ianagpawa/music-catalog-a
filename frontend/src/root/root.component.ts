import { Component, OnInit, AfterViewInit  } from '@angular/core';
import { GridService } from '../grid/grid.service';
import { Subscription } from 'rxjs';

require('./root.component.scss');

@Component({
    selector: 'root-app',
    templateUrl: './root.component.html',
})
export class RootComponent { 
    playlists: any[];
    selectedPlaylist: any;
    subscriptions: Subscription[];

    constructor ( private GridService: GridService ) { 
        this.subscriptions = [];
    }

    ngOnInit() {
        this.subscriptions.push(this.GridService.getAllMockPlaylists().subscribe((data) => {
            if (data) {
                this.playlists = data.Playlists;
            }
        }))
    }
    
}