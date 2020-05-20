import React from 'react'


export default props=>{

    function situacao(imc){
        if(imc<=19)
            return <h3>Abaixo do Peso</h3>
        else if (imc>19 && imc<=25)
            return <h3>Peso Normal</h3>
        return <h3>Acima do Peso</h3>
    }

    function calcularIMC(peso,altura){
        return peso/(altura*altura)
    }

    const imc = calcularIMC(props.peso,props.altura)
    return( 
    <div>
        <h3>Sua altura é {props.altura}m e seu peso é {props.peso}kg.</h3>
        <h3> seu IMC é {imc}</h3>
        {situacao(imc)}
    </div>
    )
}