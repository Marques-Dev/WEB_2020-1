import React, { Component } from 'react'

const cidadesStr = ['Fortaleza','Quixadá','Ocara','Limoeiro']

export default class VotacaoCidadesComClasse extends Component {

    constructor(props) {
        super(props)
        this.state = { fort: 0, quix: 0, ocar: 0, limo: 0, maior: 0, menor: 0 }
    }

    //https://pt-br.reactjs.org/docs/react-component.html#componentdidupdate
    componentDidUpdate(prevProps,prevState) {
        if(prevState.fort !== this.state.fort ||
           prevState.quix !== this.state.quix ||
           prevState.ocar !== this.state.ocar ||
           prevState.limo !== this.state.limo){
            
            const cidades = [this.state.fort, this.state.quix, this.state.ocar, this.state.limo]
            let localMaior = this.state.maior
            for (let i = 0; i < cidades.length; i++) {
                if (cidades[i] > localMaior)
                    localMaior = cidades[i]
            }
            this.setState({maior:localMaior})

            let localMenor = this.state.maior
            for (let i = 0; i < cidades.length; i++) {
                if (cidades[i] < localMenor)
                    localMenor = cidades[i]
            }
            this.setState({menor:localMenor})
        }
        //setMaior(localMaior)
    }

    maisVotadas(){
        let saida = ''
        const cidades = [this.state.fort, this.state.quix, this.state.ocar, this.state.limo]
        for (let i = 0; i < cidades.length; i++) {
            if(cidades[i]===this.state.maior) saida+=cidadesStr[i]+' '
        }
        return saida
    }

    menosVotadas(){
        let saida = ''
        const cidades = [this.state.fort, this.state.quix, this.state.ocar, this.state.limo]
        for (let i = 0; i < cidades.length; i++) {
            if(cidades[i]===this.state.menor) saida+=cidadesStr[i]+' '
        }
        return saida
    }

    render() {

        return (
            <div>
                <h2>Fortaleza: {this.state.fort}</h2>
                <h2>Quixadá: {this.state.quix}</h2>
                <h2>Ocara: {this.state.ocar}</h2>
                <h2>Limoeiro: {this.state.limo}</h2>
                <h4>Maior: {this.state.maior} : {this.maisVotadas()}</h4>
                <h4>Menor: {this.state.menor} : {this.menosVotadas()}</h4>
                <button onClick={() => this.setState({ fort: this.state.fort + 1 })} >Votar em Fortaleza</button>
                <button onClick={() => this.setState({ quix: this.state.quix + 1 })}>Votar em Quixadá</button>
                <button onClick={() => this.setState({ ocar: this.state.ocar + 1 })}>Votar em Ocara</button>
                <button onClick={() => this.setState({ limo: this.state.limo + 1 })}>Votar em Limoeiro</button>
            </div>
        )
    }
}