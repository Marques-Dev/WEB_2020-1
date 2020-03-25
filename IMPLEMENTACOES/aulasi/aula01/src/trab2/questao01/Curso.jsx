import React from 'react'

export default props=>{
    return(
        <div>
            <h2>{props.curso}</h2>
            {props.children}
        </div>
    )
}