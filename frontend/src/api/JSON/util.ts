

export const combine = (arr: any[]) => {
    
}


const getAllOrdered = (arr: any[]) => {
    return arr.map((ar) => {
        return ar.Songs
    }).sort((a,b) => {
        return a.id - b.id
    })
}