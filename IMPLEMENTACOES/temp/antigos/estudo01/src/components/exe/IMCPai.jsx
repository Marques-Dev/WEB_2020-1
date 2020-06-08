import React from 'react'

import IMCFilho from './IMCFilho'

export default props=>{
    const msgRecebida = (msg)=>alert('IMC do meu filho: '+msg)
    return (
        <div>
            <IMCFilho altura={1.83} peso='89' notificarIMCPai={msgRecebida}/>
        </div>
    )
}