import React from 'react'

export default props=>{
    return(
        <div>
            <h2>Turma: {props.turma}</h2>
            {
                React.Children.map(
                    props.children,
                    (estudante)=>{
                        return React.cloneElement(estudante,{...props})
                    }
                )
            }
        </div>
    )
}