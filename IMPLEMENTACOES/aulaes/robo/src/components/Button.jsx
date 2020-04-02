import React,{Component} from 'react'
import './Button.css'

export default class Button extends Component{
    render(){

        let classes = 'button '
        classes += this.props.double ? 'double' : ''

        return(
            <button className={classes}
                    onClick={()=>this.props.click && this.props.click(this.props.label)}
            >
                {this.props.label}
            </button>
        )
    }
}