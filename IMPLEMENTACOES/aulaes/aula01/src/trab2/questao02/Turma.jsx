import React from 'react'
import Estudante from './Estudante'

export default props=>{
    return(
        <div>
            <h2>Turma: {props.turma}</h2>
            <Estudante nome='Jefferson' turma={props.turma} curso={props.curso}/>
            <Estudante nome='Thomas' turma={props.turma} curso={props.curso}/>
            <Estudante nome='Luciana' turma={props.turma} curso={props.curso}/>
        </div>
    )
}