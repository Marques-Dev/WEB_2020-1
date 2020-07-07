import { WEST,EAST, NORTH, SOUTH, SPRITE_SIZE, MOVE_PLAYER } from '../../config/constants'
import store from '../../config/store'

export function moveToPosition(direction) {

    function getNewPosition(direction) {
        const oldPos = store.getState().player.position
        switch (direction) {
            case WEST:
                return [oldPos[0] - SPRITE_SIZE, oldPos[1]]
            case EAST:
                return [oldPos[0] + SPRITE_SIZE, oldPos[1]]
            case NORTH:
                return [oldPos[0], oldPos[1] - SPRITE_SIZE]
            case SOUTH:
                return [oldPos[0], oldPos[1] + SPRITE_SIZE]
            default:
                return [0,0]
        }
    }
    
    return {
        type: MOVE_PLAYER,
        payload: getNewPosition(direction)
    }

}