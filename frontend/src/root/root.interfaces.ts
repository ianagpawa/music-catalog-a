export interface Playlist {
    id: number,
    name: string,
    songs: Song[],
    dateAdded: Date;
}

export interface Song {
    id: number,
    title: string,
    artist: string,
    youtube: string,
    dateAdded: Date
}

