import React, {useState, useEffect} from 'react'

export default props=>{

    const [cont,setCont] = useState(0)
    const [status,setStatus] = useState('PAR')
    const [cont2,setCont2] = useState(0)

    useEffect(
        //1 - Função que ele irá executar
        ()=>{
            if(cont%2===0){
                setStatus('PAR')
            }else{
                setStatus('ÍMPAR')
            }
            console.log('CHAMANDO USE EFFECT')    
        },
        //2 - A variável do useState que irá disparar essa função
        [cont,cont2]
        
    )

    return(
        <div>
            <h1>Contador: {cont}</h1>
            <h1>Contador 2: {cont2}</h1>
            <h1>Status: {status}</h1>
            <button onClick={()=>setCont(cont+1)}>
                Incrementar Contador
            </button>
            <button onClick={()=>setCont2(cont2-1)}>
                Decrementa Contador 2
            </button>
        </div>
    )
}

//versão 0
/*export default props=>{

    let cont = 0

    return(
        <div>
            <h1>Contador: {cont}</h1>
            <button onClick={()=>cont=cont+1}>
                Incrementar Contador
            </button>
        </div>
    )
}*/