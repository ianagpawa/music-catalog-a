import { Component, Input, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { forkJoin } from 'rxjs/observable/forkJoin';
import { GridService } from '../grid/grid.service';


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
    genre: string = 'test info'
    private id: string = 'i-LuC518Euc';
    
    
    constructor(private GridService: GridService) {}

    ngOnInit(){
        this.subscriptions = [];
    }

    ngAfterViewInit(){
        if (this.GridService.selectedSongStatus) {
            this.subscriptions.push(
                this.GridService.selectedSongStatus.subscribe((data) => {
                    if (data && data.data) {
                        const song = data.data
                        this.title = song.title;
                        this.artist = song.artist;
                        this.genre = song.genre;
                        this.player.loadVideoById(song.youtube);
                        this.player.playVideo();
                    }
                    
                })
            )
        }
        
        
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