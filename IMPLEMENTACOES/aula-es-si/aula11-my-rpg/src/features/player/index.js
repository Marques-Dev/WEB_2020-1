import React from 'react'
import walkSprite from './player_walk.png'
import { connect } from 'react-redux'

function Player(props){


    return (
        <div
            style={{
                position: 'absolute',
                top: props.position[1],
                left: props.position[0], 
                backgroundImage: `url('${walkSprite}')`,
                backgroundPosition: '0px 0px',
                backgroundRepeat: 'no-repeat',
                width: '40px',
                height: '40px'
            }}
        > 
        </div>
    )

}

function mapStateToProps(state){
    return {
        position : state.player.position
    }
}


export default connect(mapStateToProps)(Player)