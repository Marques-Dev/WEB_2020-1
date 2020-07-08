import React from 'react'

import Player from '../player'
import Map from '../map'

import { WEST, EAST, NORTH, SOUTH } from '../../config/constants'
import { connect } from 'react-redux'
import { moveToPosition } from './movement'


function World(props) {

    function handleKeyDown(e) {
        switch (e.keyCode) {
            case 37:
                return props.moveToPosition(WEST)
            case 38:
                return props.moveToPosition(NORTH)
            case 39:
                return props.moveToPosition(EAST)
            case 40:
                return props.moveToPosition(SOUTH)
            default: props.moveToPosition('NONE')
        }
    }


    return (
        <div
            style={{
                position: 'relative',
                width: '800px',
                height: '400px',
                margin: '20px auto'
            }}
            tabIndex='-1'
            onKeyDown={
                (e)=>{
                    e.preventDefault()
                    handleKeyDown(e)
                }
            }
        >
            <Map/>
            <Player/>
        </div>
    )
}

function mapStateToProps(state){
    return {
        position : state.player.position
    }
}

function mapDispatchToProps(dispatch){
    return {
        moveToPosition(direction) {
            const action = moveToPosition(direction)
            dispatch(action)
        }
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(World)