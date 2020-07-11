import { CHS, GRS, SET_TILES, SPRITE_SIZE } from '../../config/constants'
import store from '../../config/store'

//action creator
export function updateTiles(tiles) {

    return {
        type: SET_TILES,
        payload: tiles
    }

}