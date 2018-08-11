const HAPPENSTANCE = require('./1-Happenstance.json')
const ANNICA = require('./2-Annica.json');
const MOBIUROBOROS = require('./3-Mobiuroboros.json');
const PORTMANTEU = require('./4-Portmanteu.json');
const NOSTALGIA = require('./5-Nostalgia.json');
const HOWLIN = require('./6-Howlin.json');
const FOREIGN = require('./7-Foreign.json');
const RAPTASTIC = require('./8-Raptastic.json');
const SOUNDSCAPE = require('./9-Soundscape.json');




export const combine = () => {
    // const HAPPENSTANCE = 
    console.log(HAPPENSTANCE)
}

const order = (arr: any[]): any[] => {
    return arr.sort((a, b) => {
        return a.id - b.id
    })
}