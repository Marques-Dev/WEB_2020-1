import React from 'react'

export default props=>{
    return(
        <div>
            <button onClick={
                ()=>{
                    //console.log('Teste')
                    props.notificarPai('Boa noite.')
                }
            }>
                Oi pai!
            </button>
        </div>
    )
}