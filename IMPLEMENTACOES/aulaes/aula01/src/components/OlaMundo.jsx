import React from 'react'

//==1
// function olaMundo(){
//     return <div>
//             <h1>Bem-vindo ao React!</h1>
//            </div>
// }
// export default olaMundo

//==2
// export default ()=>{
//     return <div>
//                  <h1>Bem-vindo ao React!</h1>
//             </div>
// }

//==3
export default (props)=> 
    <div>
        <h2>Olá, {props.nome}. Eu sou uma função arrow!</h2>
    </div>