import React from 'react'


export default props =>
    <div>
        <h3>Casa {props.casa}</h3>
        
        {
            React.Children.map(props.children, personagem=>{
                //corpo da função que irá alterar os meus children
                    return React.cloneElement(personagem,{...props})
                }//função
            )//map
        }

    </div>