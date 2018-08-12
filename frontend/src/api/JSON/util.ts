
const HAPPENSTANCE = require('./JSON/1-Happenstance.json')
const ANNICA = require('./JSON/2-Annica.json');
const MOBIUROBOROS = require('./JSON/3-Mobiuroboros.json');
const PORTMANTEU = require('./JSON/4-Portmanteu.json');
const NOSTALGIA = require('./JSON/5-Nostalgia.json');
const HOWLIN = require('./JSON/6-Howlin.json');
const FOREIGN = require('./JSON/7-Foreign.json');
const RAPTASTIC = require('./JSON/8-Raptastic.json');
const SOUNDSCAPE = require('./JSON/9-Soundscape.json');

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


export const getAllOrdered = (): any[] => {
    const playlists = getAllPlaylists().map((arr) => {
        return arr.Songs;
    })
    
    return [].concat(...playlists)  
        .sort((a,b) => {
            return a.id - b.id;
        })
}