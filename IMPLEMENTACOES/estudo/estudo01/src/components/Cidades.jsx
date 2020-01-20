import React, { Component } from 'react';

export default class Cidades extends Component {

    state = { fortaleza: 0, quixada: 0, jericoacoara: 0, limoeiro: 0 }

    votaFor = () =>{
        this.setState({fortaleza:this.state.fortaleza+1});
    }

    /*
    mesma ideia pros outros...
    */

    render() {
        return (
            <div>
                <button onClick={this.votaFor}>Fortaleza: {this.state.fortaleza}</button>
                <button onClick={this.votaQui}>Quixadá: {this.state.quixada}</button>
                <button onClick={this.votaJeri}>Jericoacoara: {this.state.jericoacoara}</button>
                <button onClick={this.votaLimo}>Limoeiro do Norte: {this.state.limoeiro}</button>
            </div>
        );
    }
}