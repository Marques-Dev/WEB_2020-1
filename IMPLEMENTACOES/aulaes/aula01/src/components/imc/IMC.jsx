import React from 'react'

import IMCCalc from './IMCCalc'

export default () => {
    let peso = 89
    let altura = 1.83
    return ( 
        <div>
            <h3>O IMC para o peso {peso}kg e altura {altura}m, é:</h3>
            <IMCCalc peso = {peso} altura = {altura}/>
        </div>
    )
}