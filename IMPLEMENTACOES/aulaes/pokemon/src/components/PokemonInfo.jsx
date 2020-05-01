import React, {Component} from 'react'

export default class PokemonInfo extends Component{

    componentDidMount(){
        console.log("ID RECEBIDO: " + this.props.match.params.id)
    }

    render(){
        return(
            <div style={{
                marginTop: 10,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column'
            }}> 
                
                <h3>Pokemon Info</h3>
                
            </div>
        )
    }
}