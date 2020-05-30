import React from 'react'
import './Button.css'

export default props=>{

    /* escolhe a classe css de acordo com o que foi passado pelo props */
    let classes = 'button '
    classes += props.operation ? 'operation':''
    classes += props.double ? 'double':''
    classes += props.triple ? 'triple':''

    return (
        <button
            /* chama uma função click() vinda do pros */
            /* passa pra click() o valor do label do botão apertado */
            onClick={()=>props.click && props.click(props.label)} 
            className={classes}>    
            {props.label}
        </button>
    )
}
    