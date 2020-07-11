import React from 'react'
import walkSprite from './player_walk.png'
import { connect } from 'react-redux'

import { SOUTH, NORTH, WEST, EAST, SPRITE_SIZE } from '../../config/constants'

function Player(props) {

    function getStepPixel(step) {
        const pixel = step*SPRITE_SIZE
        return `-${pixel}px`
    }

    function getFacingPixel(facing) {
        switch (facing) {
            case SOUTH:
                return '0px'
            case NORTH:
                return '-40px'
            case WEST:
                return '-80px'
            case EAST:
                return '-120px'
            default:
                console.log('INVALID FACING')
        }
    }

    return (
        <div
            style={{
                position: 'absolute',
                top: props.position[1],
                left: props.position[0],
                backgroundImage: `url('${walkSprite}')`,
                backgroundPosition: `${getStepPixel(props.step)} ${getFacingPixel(props.facing)}`,
                backgroundRepeat: 'no-repeat',
                width: '40px',
                height: '40px'
            }}
        >
        </div>
    )

}

function mapStateToProps(state) {
    return {
        position: state.player.position,
        facing: state.player.facing,
        step: state.player.step
    }
}


export default connect(mapStateToProps)(Player)