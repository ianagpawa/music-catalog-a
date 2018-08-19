import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AgGridModule } from 'ag-grid-angular';
import { YoutubePlayerModule } from 'ngx-youtube-player';

import { RootComponent } from './root.component';
import { GridComponent } from '../grid/grid.component';
import { VideoComponent } from '../video/video.component';

import {HttpModule} from '@angular/http';
import { ApiService } from '../api/api.service';
import { GridService } from '../grid/grid.service';

@NgModule({
    imports: [
        BrowserModule,
        YoutubePlayerModule,
        AgGridModule.withComponents([
            
        ]),
        HttpModule,
    ],
    declarations: [
        RootComponent,
        GridComponent,
        VideoComponent
    ],
    providers: [
        ApiService,
        GridService
    ],
    bootstrap: [ RootComponent ]
})
export class AppModule { }