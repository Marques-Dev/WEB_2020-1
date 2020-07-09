import React from 'react'
import { SPRITE_SIZE } from '../../config/constants'
import './styles.css' 

function getTileSprite(type) {
    switch (type) {
        case 0:
            return 'grass'
        case 5:
            return 'rock'
        case 6:
            return 'tree'
        case 10:
            return 'chest'
        default:
            return 'invalid'
    }
}

function MapTile(props) {
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
    return (
        <div
            style={{
                position: 'relative',
                top: '0px',
                left: '0px',
                width: '800px',
                height: '400px',
                border: '4px solid white',
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

export default Map