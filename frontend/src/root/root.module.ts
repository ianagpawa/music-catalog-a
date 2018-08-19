import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AgGridModule } from 'ag-grid-angular';

import { RootComponent } from './root.component';
import { GridComponent } from '../grid/grid.component';

import {HttpModule} from '@angular/http';
import { ApiService } from '../api/api.service';
import { GridService } from '../grid/grid.service';

@NgModule({
    imports: [
        BrowserModule,
        AgGridModule.withComponents([
            
        ]),
        HttpModule,
    ],
    declarations: [
        RootComponent,
        GridComponent
    ],
    providers: [
        ApiService,
        GridService
    ],
    bootstrap: [ RootComponent ]
})
export class AppModule { }