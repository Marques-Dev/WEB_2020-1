import React from 'react'
//versão hardcoded
/*import Personagem from './Personagem'

export default props =>
    <div>
        <Personagem nome='Jonas' epoca='2019'/>
        <Personagem nome='Mikkel' epoca='1986'/>
        <Personagem nome='Ulrich' epoca='1953'/>
        <Personagem nome='Hanna' epoca='1953'/>
    </div>*/
export default props =>
    <div>
        {props.children}    
    </div>