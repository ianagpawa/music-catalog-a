import { Component } from '@angular/core';

require('./root.component.scss');

@Component({
    selector: 'root-app',
    templateUrl: './root.component.html',
})
export class RootComponent { 
    playlists: any[];
    selectedPlaylist: any;
    displaySidebar: boolean;

    constructor() {
        this.playlists = [
            {name: 'New York', code: 'NY'},
            {name: 'Rome', code: 'RM'},
            {name: 'London', code: 'LDN'},
            {name: 'Istanbul', code: 'IST'},
            {name: 'Paris', code: 'PRS'}
        ];

        this.displaySidebar = false;
    }

    openSidebar = (event: any) => {
        this.displaySidebar = true;
    }
}