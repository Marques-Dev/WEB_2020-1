import React,{useState, useEffect} from 'react'

export default props=>{
    
    const [fort, votaFort] = useState(0)
    const [quix, votaQuix] = useState(0)
    const [quib, votaQuib] = useState(0)
    const [limo, votaLimo] = useState(0)
    const [maior,setMaior] = useState(0)
    const [menor,setMenor] = useState(0)

    const cidadesStr = ['Fortaleza','Quixadá','Quixeramobim','Limoeiro']

    useEffect(()=>{
        const cidades = [fort,quix,quib,limo]

        let maiorLocal = maior
        for (let i = 0; i < cidades.length; i++) {
            if(cidades[i]>maiorLocal) maiorLocal = cidades[i]
        }
        setMaior(maiorLocal)

        let menorLocal = maiorLocal
        for (let i = 0; i < cidades.length; i++) {
            if(cidades[i]<menorLocal) menorLocal = cidades[i]
        }
        setMenor(menorLocal)
        
    },[fort,quix,quib,limo])

    function mostrarMaiores(){
        let maiores = ''
        const cidades = [fort,quix,quib,limo]
        for (let i = 0; i < cidades.length; i++) {
            if(cidades[i]===maior) maiores+= cidadesStr[i]+' '
        }
        return maiores
    }

    function mostrarMenores(){
        let menores = ''
        const cidades = [fort,quix,quib,limo]
        for (let i = 0; i < cidades.length; i++) {
            if(cidades[i]===menor) menores+= cidadesStr[i]+' '
        }
        return menores
    }

    return(
        <div>
            <h2>Fortaleza: {fort}</h2>
            <h2>Quixadá: {quix}</h2>
            <h2>Quixeramobim: {quib}</h2>
            <h2>Limoeiro: {limo}</h2>
            <h3>Maior: {maior} : {mostrarMaiores()}</h3>
            <h3>Menor: {menor}: {mostrarMenores()}</h3>
            <button onClick={()=>votaFort(fort+1)} >Votar em Fortaleza</button>
            <button onClick={()=>votaQuix(quix+1)}>Votar em Quixadá</button>
            <button onClick={()=>votaQuib(quib+1)}>Votar em Quixeramobim</button>
            <button onClick={()=>votaLimo(limo+1)}>Votar em Limoeiro</button>
        </div>
    )
}