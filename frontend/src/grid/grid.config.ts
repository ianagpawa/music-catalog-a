import { ColDef } from 'ag-grid';

export const GRID_CONFIG = {
    COLUMN_DEFS: [
        {headerName: 'Id', field: 'id', width: 80, suppressFilter: true },
        {headerName: 'Title', field: 'title' },
        {headerName: 'Artist', field: 'artist' },
        {headerName: 'Playlist', field: 'playlist_id'},
        {headerName: 'Genre', field: 'genre'},
        {headerName: 'Date added', field: 'time_created', comparator: this.dateComparator}
    ] as ColDef[]
}

const dateComparator = (date1: any, date2: any) => {
    const date1Number = this.monthToComparableNumber(date1);
    const date2Number = this.monthToComparableNumber(date2);
    if (date1Number === null && date2Number === null) {
      return 0;
    }
    if (date1Number === null) {
      return -1;
    }
    if (date2Number === null) {
      return 1;
    }
    return date1Number - date2Number;
    // const date1Number = this.monthToComparableNumber(date1);
    // const date2Number = this.monthToComparableNumber(date2);
    // return !date1Number && !date2Number
    //     ? 0
    //     : (!date1Number)
    //         ? -1
    //         : (!date2Number)
    //             ? 1
    //             : date1Number - date2Number
}



const monthToComparableNumber = (date: any) => {
    if (date === undefined || date === null || date.length !== 10) {
        return null;
    }
    const yearNumber = date.substring(6, 10);
    const monthNumber = date.substring(3, 5);
    const dayNumber = date.substring(0, 2);
    const result = yearNumber * 10000 + monthNumber * 100 + dayNumber;
    return result;
}