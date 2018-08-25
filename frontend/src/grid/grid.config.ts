import { ColDef } from 'ag-grid';

export const GRID_CONFIG = {
    COLUMN_DEFS: [
        {headerName: '', field: 'id', width: 50 },
        {headerName: 'Title', field: 'title' },
        {headerName: 'Artist', field: 'artist' },
        {headerName: 'Playlist', field: 'playlist_id'},
        {headerName: 'Genre', field: 'genre'},
        {headerName: 'Date added', field: 'time_created'}
    ] as ColDef[]
}