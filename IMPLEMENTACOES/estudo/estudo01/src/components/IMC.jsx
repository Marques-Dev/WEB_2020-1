import React from 'react';

export default props =>{

    function calcularIMC(peso,altura){
        return peso/(altura*altura);
    }

    const calcularIMCV2 = props =>{
        return props.peso/(props.altura*props.altura);
    }

    return <div>
        <h3>Sua altura é {props.altura}m e seu peso é {props.peso}kg.</h3>
        <h3>seu IMC é {calcularIMC(props.peso, props.altura)}</h3>
        <h3>seu IMC é {calcularIMCV2(props)}</h3>
    </div>

}