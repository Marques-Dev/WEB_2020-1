import { WEST, EAST, NORTH, SOUTH, SPRITE_SIZE, MOVE_PLAYER, MAP_HEIGHT, MAP_WIDTH } from '../../config/constants'
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
                return oldPos
        }
    }

    function observeBoundaries(oldPos, newPos) {
        if (
            (newPos[0] >= 0 && newPos[0] <= MAP_WIDTH - SPRITE_SIZE)
            &&
            (newPos[1] >= 0 && newPos[1] <= MAP_HEIGHT - SPRITE_SIZE)
        )
            return newPos
        return oldPos
    }

    function observeObstacle(oldPos, newPos) {

    }

    function dispatchMove() {
        const oldPos = store.getState().player.position
        return {
            type: MOVE_PLAYER,
            payload: observeBoundaries( oldPos, getNewPosition(direction))
        }
    }

    return dispatchMove()

}