import React from 'react'
import Filho from './Filho'

export default props=>{

    //const msgRecebida = (msg)=>{alert('Olá meu filho! ' + msg)}
    const msgRecebida = (msg)=>{alert(`Olá meu filho! ${msg}`)}

    return(
        <div>
            <Filho notificarPai={msgRecebida}/>
        </div>
    )
}