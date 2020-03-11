import React from 'react'
import IMCMsg from './IMCMsg'

export default props=>{
    let imc = props.peso/(props.altura*props.altura)
    return <div>
            IMC = {props.peso/(props.altura*props.altura)}
            <IMCMsg imc={props.peso/(props.altura*props.altura)}/>
           </div>
}