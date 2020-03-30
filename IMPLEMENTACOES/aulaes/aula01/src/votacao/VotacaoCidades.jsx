import React,{useState,useEffect} from 'react'

export default props=>{

    const [fort,setFort] = useState(0)
    const [quix,setQuix] = useState(0)
    const [ocar,setOcar] = useState(0)
    const [limo,setLimo] = useState(0)

    const [maior,setMaior] = useState(0)
    const [menor,setMenor] = useState(0)

    const cidadesStr = ['Fortaleza','Quixadá','Ocara','Limoeiro']

    useEffect(
        ()=>{
            
            const cidades = [fort,quix,ocar,limo]
            let localMaior = maior
            for (let i = 0; i < cidades.length; i++) {
                if(cidades[i]>localMaior)
                    localMaior = cidades[i]
            }
            setMaior(localMaior)

            let localMenor = localMaior
            for (let i = 0; i < cidades.length; i++) {
                if(cidades[i]<localMenor)
                    localMenor = cidades[i]
            }
            setMenor(localMenor)

        },
        [fort,quix,ocar,limo]
    )

    function maisVotadas(){
        let saida = ''
        const cidades = [fort,quix,ocar,limo]
        for (let i = 0; i < cidades.length; i++) {
            if(cidades[i]===maior) saida+=cidadesStr[i]+' '
        }
        return saida
    }

    function menosVotadas(){
        let saida = ''
        const cidades = [fort,quix,ocar,limo]
        for (let i = 0; i < cidades.length; i++) {
            if(cidades[i]===menor) saida+=cidadesStr[i]+' '
        }
        return saida
    }

    return(
        <div>
            <h2>Fortaleza: {fort}</h2>
            <h2>Quixadá: {quix}</h2>
            <h2>Ocara: {ocar}</h2>
            <h2>Limoeiro: {limo}</h2>
            <h4>Maior: {maior} : {maisVotadas()}</h4>
            <h4>Menor: {menor} : {menosVotadas()}</h4>
            <button onClick={()=>setFort(fort+1)}> Votar em Fortaleza </button>
            <button onClick={()=>setQuix(quix+1)}> Votar em Quixadá </button>
            <button onClick={()=>setOcar(ocar+1)}> Votar em Ocara </button>
            <button onClick={()=>setLimo(limo+1)}> Votar em Limoeiro </button>
        </div>
    )
}