import { Component, Input, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { forkJoin } from 'rxjs/observable/forkJoin';


require('./video.component.scss');

@Component({
    selector: 'video-comp',
    templateUrl: './video.component.html',
})

export class VideoComponent {
    subscriptions: Subscription[];
    player: YT.Player;
    artist: string ='test'
    title: string = 'Something'
    info: string = 'test info'
    private id: string = 'i-LuC518Euc';
    
    
    constructor() {}

    ngOnInit(){
        this.subscriptions = [];
    }

    ngAfterViewInit(){
        
    }


    ngOnDestroy(){
        if (this.subscriptions) {
            this.subscriptions.forEach((s) => s.unsubscribe());

        }
        this.subscriptions.length = 0;
    }
    
    savePlayer(player: YT.Player) {
        this.player = player;
        console.log('player instance', player);
    }
    onStateChange(event: any) {
        console.log('player state', event.data);
    }
    

}