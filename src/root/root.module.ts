import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AgGridModule } from 'ag-grid-angular';

import { RootComponent } from './root.component';
import { GridComponent } from '../grid/grid.component'; 

@NgModule({
    imports: [
        BrowserModule,
        AgGridModule.withComponents([
            
        ])
    ],
    declarations: [
        RootComponent,
        GridComponent
    ],
    bootstrap: [ RootComponent ]
})
export class AppModule { }