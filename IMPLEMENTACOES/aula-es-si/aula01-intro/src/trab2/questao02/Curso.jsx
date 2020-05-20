import React from 'react'
import Turma from './Turma'

export default props=>{
    return(
        <div>
            <h2>Curso: {props.curso}</h2>
            <Turma turma='FUP'curso={props.curso}/>
        </div>
    )
}