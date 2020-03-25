import React from 'react'
import IMCFilho from './IMCFilho'

export default props=>{
    
    const imcRecebido = 
        (msg)=>{
            alert('Oi pai! Meu imc é ' + msg)
        }

    return(
        <div>
            <IMCFilho notificarIMCPai={imcRecebido} peso={89} altura={1.83}/>
        </div>
    )
}