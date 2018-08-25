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
    song: any; 
    songList: any[] = [];
    
    
    constructor(private GridService: GridService) {
        this.subscriptions = [];
        if (this.GridService.listOfSongs) {
            this.subscriptions.push(this.GridService.listOfSongs.subscribe((data) => {
                setTimeout( () => {
                    this.song = data.rowsToDisplay[0].data;
                })
                
                
                this.songList = data.rowsToDisplay.map((rowNode: any) => {
                    return rowNode.data.youtube
                })
                
            }))
        }
    }

    ngOnInit(){
        
    }

    ngAfterViewInit(){
        if (this.GridService.selectedSongStatus) {
            this.subscriptions.push(
                this.GridService.selectedSongStatus.subscribe((data) => {
                    if (data && data.data) {
                        const song = data.data
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
    
    playerReady(player: YT.Player) {
        this.player = player;
        this.player.cuePlaylist(this.songList, 0);
        // console.log('player instance', player);
    }
    onStateChange(event: any) {
        // console.log('player state', event.data);
    }
    

}