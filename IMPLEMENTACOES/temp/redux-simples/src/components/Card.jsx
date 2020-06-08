import './Card.css'
import React, { Component } from 'react'

export default class Card extends Component {

    getColor(){
        if(this.props.red) return 'Red'
        if(this.props.green) return 'Green'
        if(this.props.blue) return 'Blue'
        if(this.props.purple) return 'Purple'
    }

    render() {
        return (
            <div className={`Card ${this.getColor()}`}>
                <div className='Header'>
                    <span className='Title'>{this.props.title}</span>
                </div>
                <div className="Content">
                    {this.props.children}
                </div>
            </div>
        )
    }
}