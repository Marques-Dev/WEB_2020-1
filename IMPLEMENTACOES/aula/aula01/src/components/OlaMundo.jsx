import React from 'react'

//forma simples
// function olaMundo(){
//     return <h1>Olá Mundo dos Componentes React</h1>
// }
 
// export default olaMundo

//forma arrow
// export default ()=>{
//     return <h1>Olá Mundo dos Componentes React</h1>
// }

//forma arrow 2
export default (props)=> 
    <div>
        <h1>Olá Mundo dos Componentes React Arrow</h1>
        <h1>{props.nome} {props.sobrenome}</h1>
    </div>