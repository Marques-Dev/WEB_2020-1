import React from 'react'
import Filho from './Filho'







export default props=>{
    
    const msgRecebida = msg=> alert('Recebi ' + msg)
    return (
        <div>
            <Filho notificarPai={msgRecebida}/>
        </div>
    )
}