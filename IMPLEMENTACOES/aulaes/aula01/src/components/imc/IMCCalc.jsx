import React from 'react'

import IMCMsg from './IMCMsg'

export default props =>{
    
    let imc = props.peso/(props.altura*props.altura)
    
    return( 
    <div>
        <h2>IMC: {imc}</h2>
        <IMCMsg imc = {imc}/>
    </div>
    )
}