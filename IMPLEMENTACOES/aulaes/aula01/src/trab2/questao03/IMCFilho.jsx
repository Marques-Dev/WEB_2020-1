import React from 'react'

export default props=>{
    
    function calculaIMC(peso,altura){
        return peso/(altura*altura)
    }
    
    const meuIMC = calculaIMC(props.peso,props.altura)

    return(
        <div>
            <button onClick={
                ()=>{
                    props.notificarIMCPai(meuIMC)
                }
            }>
                Oi pai!
            </button>
        </div>
    )
}