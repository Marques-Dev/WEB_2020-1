import React from 'react'
import { SPRITE_SIZE, GRS, TRE, ROK, CHS } from '../../config/constants'
import './styles.css' 

import { connect } from 'react-redux'

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
    console.log('render map')
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
        tiles : state.map.tiles
    }
}

export default connect(mapStateToProps)(Map)

