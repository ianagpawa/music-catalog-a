import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgGridModule } from 'ag-grid-angular';
import { YoutubePlayerModule } from 'ngx-youtube-player';
import { CommonModule } from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';

import { RootComponent } from './root.component';
import { GridComponent } from '../grid/grid.component';
import { VideoComponent } from '../video/video.component';

import {HttpModule} from '@angular/http';
import { ApiService } from '../api/api.service';
import { GridService } from '../grid/grid.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        BrowserModule,
        BrowserAnimationsModule,
        DropdownModule,
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