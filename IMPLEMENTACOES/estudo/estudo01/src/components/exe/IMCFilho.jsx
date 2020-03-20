import React from 'react'

export default props =>{
    function calculaIMC(altura,peso){
        return peso/(altura*altura)
    }

    const imc = calculaIMC(props.altura,props.peso)

    return(
        <div>
            <button onClick={()=>props.notificarIMCPai(imc)}>
                Ver meu IMC
            </button>
        </div>
    )
}