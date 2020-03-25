import React from 'react'

export default props=>{
    return(
       <div>
           <h3>{props.turma}</h3>
           {
               React.Children.map(props.children, 
                    estudante=>{
                        return React.cloneElement(estudante,{...props})
                    }
               )
           }
       </div> 
    )
}