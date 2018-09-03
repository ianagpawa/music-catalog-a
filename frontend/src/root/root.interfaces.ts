export interface Playlist {
    id: number,
    name: string,
    description: string,
    time_created: Date
}

export interface Song {
    id: number,
    title: string,
    artist: string,
    youtube: string,
    time_created: Date,
    playlist_id: number,
    genre: string,
    rendition: string
}
