import React from 'react'

import Turma from './Turma'

export default props=>{
    return(
        <div>
            <h1>Curso {props.curso}</h1>
            <Turma turma='POO'/>
        </div>
    )
}