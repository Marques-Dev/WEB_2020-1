import React, { Component } from 'react'

import Player from '../player'
import Map from '../map'

import { WEST, EAST, NORTH, SOUTH, ADD_TILES, SPRITE_SIZE, CHS, GRS } from '../../config/constants'
import { connect } from 'react-redux'
import { moveToPosition } from './movement'
import { updateTiles } from './check_chest'

import { tiles as tiles_1 } from '../../data/maps/1'


class World extends Component {

    constructor(props) {
        super(props)
        props.setTiles(tiles_1)
    }

    checkChest() {
        const x = this.props.position[0] / SPRITE_SIZE // o x do personagem na tela, é o j do obstáculo na matriz
        const y = this.props.position[1] / SPRITE_SIZE // o y do personagem na tela, é o i do obstáculo na matriz
        //console.log(`[${x},${y}]`)
        if (this.props.tiles[y][x] === CHS) {
            let newTiles = this.props.tiles
            newTiles[y][x] = GRS
            this.props.updateTiles(newTiles)
        }
    }


    handleKeyDown(e) {
        if (e.keyCode >= 37 && e.keyCode <= 40){
            this.checkChest()
            switch (e.keyCode) {
                case 37:
                    return this.props.moveToPosition(WEST)
                case 38:
                    return this.props.moveToPosition(NORTH)
                case 39:
                    return this.props.moveToPosition(EAST)
                case 40:
                    return this.props.moveToPosition(SOUTH)
                default: console.log('INVALID POSITION')
            }
        }
    }

    render() {
        console.log('render world')
        return (
            <div
                style={{
                    position: 'relative',
                    width: '800px',
                    height: '400px',
                    margin: '20px auto',
                    outline: '0px',
                    borderStyle: 'solid',
                    borderColor: 'white'
                }}
                tabIndex='-1'
                onKeyDown={
                    (e) => {
                        e.preventDefault()
                        this.handleKeyDown(e)
                    }
                }
            >
                <Map />
                <Player />
            </div>
        )
    }

}

function mapStateToProps(state) {
    return {
        position: state.player.position,
        tiles: state.map.tiles
    }
}

function mapDispatchToProps(dispatch) {
    return {
        moveToPosition(direction) {
            const action = moveToPosition(direction)
            dispatch(action)
        },
        updateTiles(tiles) {
            const action = updateTiles(tiles)
            dispatch(action)
        },
        setTiles(tiles) {
            dispatch({
                type: ADD_TILES,
                payload: tiles
            })
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(World)