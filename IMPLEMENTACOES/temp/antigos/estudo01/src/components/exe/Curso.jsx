import React from 'react'

export default props=>
    <div>
        <h1>Curso {props.curso}</h1>
        {props.children}
    </div>