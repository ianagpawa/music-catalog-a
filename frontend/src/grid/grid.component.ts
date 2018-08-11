import { Component, Input, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { ColDef, GridOptions } from 'ag-grid';

require('./grid.component.scss');

@Component({
    selector: 'grid-comp',
    templateUrl: './grid.component.html',
})
export class GridComponent {
    gridOptions: GridOptions = {}
    columnDefs: ColDef[];
    rowData: any;

    constructor(){

    }

    ngOnInit(){
        this.columnDefs = [
            {headerName: 'Title', field: 'title' },
            {headerName: 'Artist', field: 'artist' },
            {headerName: 'Youtube Link', field: 'youtube'}
        ];

        this.rowData = [
            {title: "In The Fall", artist: "Future Island", youtube: "https://youtu.be/0rUgAPuMlPw"}
        ];
    }

    ngAfterViewInit(){
        this.gridOptions.api.setColumnDefs(this.columnDefs);
        this.gridOptions.api.setRowData(this.rowData)
    }


    ngOnDestroy(){

    }
    
    

}