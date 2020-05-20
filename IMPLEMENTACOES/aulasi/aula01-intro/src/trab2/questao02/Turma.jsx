import React from 'react'

import Estudante from './Estudante'

export default props=>{
    return(
        <div>
            <h2>Turma {props.turma}</h2>
            <Estudante nome='Jefferson' curso='Informática'/>
            <Estudante nome='Breno' curso='Informática'/>
        </div>
    )
}