import { Component, OnInit, AfterViewInit, Output, OnDestroy, EventEmitter  } from '@angular/core';
import { GridService } from '../grid/grid.service';
import { Subscription, BehaviorSubject, Subject, Observable } from 'rxjs';

require('./root.component.scss');

@Component({
    selector: 'root-app',
    templateUrl: './root.component.html',
})
export class RootComponent implements OnInit, AfterViewInit, OnDestroy { 
    playlists: any[];
    selectedPlaylist: any;
    displaySidebar: boolean;

    subscriptions: Subscription[];

    @Output() output: EventEmitter<any>;

    constructor ( private GridService: GridService ) { 
        this.subscriptions = [];
        this.output = new EventEmitter();
        this.displaySidebar = false;
        
    }

    ngOnInit() {
        this.subscriptions.push(this.GridService.getAllMockPlaylists().subscribe((data) => {
            if (data) {
                this.playlists = data.Playlists;
            }
        }))
    }

    ngAfterViewInit() {

    }

    
    ngOnDestroy() {
        this.subscriptions.forEach(s => s.unsubscribe)
        this.subscriptions.length = 0;
    }

    onSelectedPlaylist() {
        this.output.emit(this.selectedPlaylist)
    }

    openSidebar = (event: any) => {
        this.displaySidebar = true;
    }
}