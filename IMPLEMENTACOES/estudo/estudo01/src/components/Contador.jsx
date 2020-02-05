import React, {useState,useEffect} from 'react';

export default props =>{
    const [cont,setCont] = useState(0);
    const [status,parImpar] = useState('par');
    
    useEffect(()=>{
        if(cont%2===0) 
            parImpar('par');
        else
            parImpar('ímpar')
    },[cont])
    
    return(
        <div>
            <h1>Contador: {cont}</h1>
            <h1>Status: {status}</h1>
            <button onClick={()=>setCont(cont+1)}> Incrementa </button>
        </div>
    )
}