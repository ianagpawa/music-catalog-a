import { ColDef, GridOptions } from 'ag-grid';

export const GRID_CONFIG = {
    COLUMN_DEFS: [
        {headerName: 'Title', field: 'title' },
        {headerName: 'Artist', field: 'artist' },
        {headerName: 'Playlist', field: 'playlist_id'},
        {headerName: 'Youtube', field: 'youtube'}
    ] as ColDef[]
}