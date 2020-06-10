import React from 'react'

export default props => {

    function calcularIMC(peso,altura){
        return peso/(altura*altura)
    }

    function situacao(imc){
        if(imc<=19)
            return <h3>Abaixo do peso.</h3>
        else if(imc>19 && imc<=25)
            return <h3>Peso normal.</h3>
        return <h3>Acima do peso.</h3>

    }

    const imc = calcularIMC(props.peso,props.altura)
    return (
        <div>
            <h3>Sua altura é {props.altura}m e seu peso é {props.peso}kg.</h3>
            <h3>Seu IMC é {imc}</h3>
            {situacao(imc)}
        </div>
    )
}