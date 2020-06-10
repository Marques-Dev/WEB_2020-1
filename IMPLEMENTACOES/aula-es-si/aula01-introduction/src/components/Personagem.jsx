import React from 'react'

export default props=>
    <div>
        {props.nome} pertence a Casa <strong>{props.casa}</strong>
         da região {props.regiao}, continente {props.continente}. Raça: {props.raca}.

    </div>