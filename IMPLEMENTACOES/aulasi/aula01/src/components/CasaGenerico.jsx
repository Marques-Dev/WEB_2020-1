import React from 'react'






export default props =>
    <div>
        <h3>Casa {props.casa}</h3>
        {
            React.Children.map(
                    props.children,
                    filho=>{
                        // return React.cloneElement(filho,{casa:props.casa,
                        //                                  regiao:props.regiao,
                        //                                  raca:props.raca})
                        return React.cloneElement(filho,{...props})
                    }
                )
        }
        
        {/*
            React.Children.map(props.children, personagem=>{
                //corpo da função que irá alterar os meus children
                    return React.cloneElement(personagem,{...props})
                }//função
            )//map
            */}

    </div>