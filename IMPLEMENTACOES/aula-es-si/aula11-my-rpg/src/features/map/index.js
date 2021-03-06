import React from 'react'
import { SPRITE_SIZE, GRS, TRE, ROK, CHS } from '../../config/constants'
import './styles.css' 
import { connect } from 'react-redux'
import { setTiles } from './environment'

function MapTile(props) {

    function getTileSprite(type) {
        switch (type) {
            case GRS:
                return 'grass'
            case ROK:
                return 'rock'
            case TRE:
                return 'tree'
            case CHS:
                return 'chest'
            default:
                return 'invalid'
        }
    }

    return (
        <div 
            className={`tile ${getTileSprite(props.tile)}`}
            style={{
                height: SPRITE_SIZE,
                width: SPRITE_SIZE
            }}
        />
    )
}

function MapRow(props) {
    return (
        <div className='row'>
            {
                props.tiles.map(
                    (tile,index) => {
                        return <MapTile tile={tile} key={index}/>
                    }
                )
            }
        </div>
    )
}

function Map(props) {

    function checkChest(position) {
        const x = position[0] / SPRITE_SIZE // o x do personagem na tela, é o j do obstáculo na matriz
        const y = position[1] / SPRITE_SIZE // o y do personagem na tela, é o i do obstáculo na matriz
        //console.log(`[${x},${y}]`)
        if (props.tiles[y][x] === CHS) {
            let newTiles = props.tiles
            newTiles[y][x] = GRS
            setTiles(newTiles)
        }
    }

    checkChest(props.position)
    return (
        <div
            style={{
                position: 'relative',
                top: '0px',
                left: '0px',
                width: '800px',
                height: '400px'
            }}
        >
            {
                props.tiles.map(
                    (row, index) => {
                        return <MapRow tiles={row} key={index}/>
                    }
                )
            }
        </div>
    )
}

function mapStateToProps(state){
    return {
        tiles : state.map.tiles,
        position: state.player.position //importante, dispara a renderização do mapa
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setTiles(tiles) {
           const action = setTiles(tiles)
           dispatch(action)
        }
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Map)

