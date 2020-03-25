import React from 'react'

import IMCFilho from './IMCFilho'

export default props=>{

    const imcRecebido = 
        (imc) => {
            alert('O IMC do meu filho é: ' + imc)    
        }

    return(
        <div>
            <IMCFilho notificarIMC={imcRecebido} peso={89} altura={1.83}/>
        </div>
    )
}