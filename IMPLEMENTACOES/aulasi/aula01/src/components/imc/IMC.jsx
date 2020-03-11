import React from 'react'
import IMCCalc from './IMCCalc'

let peso = 85
let altura = 1.84

export default props=>
    <div>
        O IMC para a altura {altura}m e peso {peso}kg é:
        <IMCCalc peso={peso} altura={altura}/>
    </div>