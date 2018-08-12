
const HAPPENSTANCE = require('./1-Happenstance.json')
const ANNICA = require('./2-Annica.json');
const MOBIUROBOROS = require('./3-Mobiuroboros.json');
const PORTMANTEU = require('./4-Portmanteu.json');
const NOSTALGIA = require('./5-Nostalgia.json');
const HOWLIN = require('./6-Howlin.json');
const FOREIGN = require('./7-Foreign.json');
const RAPTASTIC = require('./8-Raptastic.json');
const SOUNDSCAPE = require('./9-Soundscape.json');
const PLAYLISTS = require('./PLAYLISTS.json');

const getAllPlaylists = (): any[] => {
    return [
        HAPPENSTANCE,
        ANNICA,
        MOBIUROBOROS,
        PORTMANTEU,
        NOSTALGIA,
        HOWLIN,
        FOREIGN,
        RAPTASTIC,
        SOUNDSCAPE
    ]
}

const orderArray = (arr: any[]): any[] => {
    return arr.sort((a,b) => {
        return a.id - b.id;
    })
}


export const getPlaylists = () => {
    return orderArray(PLAYLISTS.Playlists);
}


export const getAllOrdered = (): any[] => {
    const playlists = getAllPlaylists().map((arr) => {
        return arr.Songs;
    })
    
    return [].concat(...playlists)  
        .sort((a,b) => {
            return a.id - b.id;
        })
        .map((song, index) => {
            song.youtube = song.youtube.split("=")[1];
            song.id = index + 1;
            return song;
        })
}
