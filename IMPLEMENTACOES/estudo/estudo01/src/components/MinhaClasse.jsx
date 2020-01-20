import React, {Component} from 'react';

export default class MinhaClasse extends Component{
    render(){
        return (
        <div>Oi, eu sou o {this.props.nome}</div>
        )
    }
}