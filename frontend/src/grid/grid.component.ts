import { Component, Input, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { ColDef, GridOptions } from 'ag-grid';
import { GridService } from './grid.service';

require('./grid.component.scss');

@Component({
    selector: 'grid-comp',
    templateUrl: './grid.component.html',
})
export class GridComponent {
    gridOptions: GridOptions;
    
    constructor(
        private GridService: GridService
    ) {}

    ngOnInit(){
        
        const p = this.GridService.getPlaylists();
        console.log(p)
        debugger;
        let columnDefs = [
            {headerName: 'Make', field: 'make' },
            {headerName: 'Model', field: 'model' },
            {headerName: 'Price', field: 'price'}
        ];
    
        let rowData = [
            { make: 'Toyota', model: 'Celica', price: 35000 },
            { make: 'Ford', model: 'Mondeo', price: 32000 },
            { make: 'Porsche', model: 'Boxter', price: 72000 }
        ];

        this.gridOptions = {
            columnDefs,
            rowData
        }

    }

    ngAfterViewInit(){
        
    }


    ngOnDestroy(){

    }
    
    

}