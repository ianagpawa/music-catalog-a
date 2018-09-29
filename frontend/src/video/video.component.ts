import { Component, Input, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { GridService } from '../grid/grid.service';

import { Song } from '../root/root.interfaces';


require('./video.component.scss');

@Component({
    selector: 'video-comp',
    templateUrl: './video.component.html',
})

export class VideoComponent {
    subscriptions: Subscription[];
    player: YT.Player;
    song: Song;
    songList: any[] = [];
    height: any;
    width: any;
    
    
    constructor(private GridService: GridService) {
        this.subscriptions = [];
        this.song = {} as any;

        this.height = window.screen.height / 1.75;
        this.width  = (window.screen.width / 2) - 25;
        
    }

    ngOnInit(){
        
    }

    ngAfterViewInit(){
        if (this.GridService.listOfSongs) {
            this.subscriptions.push(this.GridService.listOfSongs.subscribe((data) => {
                setTimeout( () => {
                    this.song = data.rowsToDisplay[0].data;
                });
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
                        const index: number = this.songList.indexOf(data.data.youtube);

                        // TODO: Create modal to update song link
                        if (index === -1) {
                            window.alert('Not Found')
                        }

                        this.player.playVideoAt(index);
                        
                        this.song = {
                            title: data.data.title,
                            artist: data.data.artist,
                            genre: data.data.genre,
                            id: data.data.id,
                            rendition: data.data.rendition,
                            youtube: data.data.youtube,
                            time_created: data.data.time_created,
                            playlist_id: data.data.playlist_id
                        }
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
        if (event.data === 5) {
            this.songList = this.player.getPlaylist();
        }
    }
}