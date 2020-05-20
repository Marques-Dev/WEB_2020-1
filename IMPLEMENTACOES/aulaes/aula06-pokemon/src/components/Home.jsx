import React, {Component} from 'react'

export default class Home extends Component{
    render(){
        return(
            <div style={{
                marginTop: 10,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column'
            }}>
              <h1>Atividade Pokemon</h1>
            </div>
        )
    }
}