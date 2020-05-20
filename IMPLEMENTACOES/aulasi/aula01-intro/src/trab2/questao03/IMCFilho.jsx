import React from 'react'

export default props=>{

    function calculaIMC(peso,altura){
        return peso/(altura*altura)
    }

    let meuIMC = calculaIMC(props.peso,props.altura)

    return(
        <div>
            <button onClick={
                ()=>{
                        props.notificarIMC(meuIMC)   
                        //alert('Oi, eu sou o filho!')
                    }
                }
            >
                Enviar IMC pro meu pai.
            </button>
        </div>
    )

}