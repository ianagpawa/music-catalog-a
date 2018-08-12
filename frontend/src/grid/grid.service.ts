import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';

@Injectable()
export class GridService {
    constructor(
        private ApiService: ApiService
    ) { }

    getFirst() {
        // return this.ApiService.getHappenstance().subscribe((data) => {
        //     console.log(data);
        // });
    }
}