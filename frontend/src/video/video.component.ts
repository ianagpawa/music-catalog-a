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

        console.log(window.screen.height);
        console.log(window.screen.width)
        
    }

    ngOnInit(){
        
    }

    ngAfterViewInit(){
        if (this.GridService.listOfSongs) {
            this.subscriptions.push(this.GridService.listOfSongs.subscribe((data) => {
                setTimeout( () => {
                    this.song = data.rowsToDisplay[0].data;
                })
                this.songList = data.rowsToDisplay.map((rowNode: any) => {
                    return rowNode.data.youtube
                })

                if (this.player) {
                    this.player.cuePlaylist(this.songList, 0);
                    this.song = data.rowsToDisplay[0].data;
                    
                }
            }))
        }

        if (this.GridService.selectedSongStatus) {
            this.subscriptions.push(
                this.GridService.selectedSongStatus.subscribe((data) => {
                    if (data && data.data) {
                        const index: number = this.songList.indexOf(data.data.youtube)
                        this.player.playVideoAt(index);
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
    }
    onStateChange(event: any) {
    
    }
    

}