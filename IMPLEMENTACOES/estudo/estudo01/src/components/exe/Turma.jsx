import React from 'react'

export default props=>
    <div>
        <h1>Turma {props.turma}, Curso {props.curso}</h1>
        {React.Children.map(props.children, estudante => {
            return React.cloneElement(estudante, { ...props });
        })}
    </div>