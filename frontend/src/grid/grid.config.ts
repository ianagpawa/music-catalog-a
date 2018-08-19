import { ColDef, GridOptions } from 'ag-grid';

export const GRID_CONFIG = {
    COLUMN_DEFS: [
        {headerName: 'Id', field: 'id' },
        {headerName: 'Title', field: 'title' },
        {headerName: 'Artist', field: 'artist' },
        {headerName: 'Playlist', field: 'playlist_id'},
        {headerName: 'Genre', field: 'genre'},
        {headerName: 'Date added', field: 'time_created'}
    ] as ColDef[]
}