import React from 'react'

export default props =>{
    if(props.imc <=19)
        return <h2>Abaixo do peso.</h2>
    else if(props.imc>19 && props.imc<=25)
        return <h2>Peso normal.</h2>
    return <h2>Acima do peso.</h2>
}