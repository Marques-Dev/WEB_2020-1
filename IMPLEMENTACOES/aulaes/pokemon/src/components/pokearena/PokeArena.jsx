import React, { Component } from 'react'
import background from '../../img/battlegrass.png'
import PokemonTableRow from './PokemonTableRow'

const delay = ms => new Promise(res => setTimeout(res, ms));


export default class PokeArena extends Component {

    constructor(props) {
        super(props)
        let equipeRocket = [{ id: 24, nome: 'arbok', life: 100 },
        { id: 52, nome: 'meowth', life: 100 },
        { id: 71, nome: 'victreebel', life: 100 },
        { id: 108, nome: 'lickitung', life: 100 },
        { id: 110, nome: 'weezing', life: 100 },
        { id: 112, nome: 'rhydon', life: 100 }]
        this.state = { pokeball: [], desafiantes: equipeRocket, escolhido: 3, desafiante: 5, mensagem: '' }
        this.mudarEscolhido = this.mudarEscolhido.bind(this)

    }

    componentDidMount() {
        const pokeball = JSON.parse(sessionStorage.getItem('pokeball'))
        if (pokeball) {
            this.setState({ pokeball: pokeball })
        }

        this.setState({mensagem:'A batalha vai começar!'})
    }

    renderizarPokeball() {
        return this.state.pokeball.map(
            (pokemon, i) => {
                return <PokemonTableRow id={pokemon.id} key={i} nome={pokemon.nome} 
                                        life={pokemon.life} mudarEscolhido={this.mudarEscolhido}
                                        index={i}
                                        jogador={true}/>
            }
        )
    }

    renderizarArena() {
        if (!this.state.pokeball || this.state.pokeball.length === 0) return

        let escolhido = this.state.pokeball[this.state.escolhido]
        let desafiante = this.state.desafiantes[this.state.desafiante]

        const imgURLDesafiante =
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + desafiante.id + '.png'

        const imgURLEscolhido =
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/' + escolhido.id + '.png'

        return (
            <>
            <table style={{ width: '470px',margin:'auto'}} background={background}>
                <tbody>
                    <tr>
                        <td style={{ textAlign: "right" }}>
                            <span style={{ textTransform: "capitalize" }}>
                                <b>{desafiante.nome} ({desafiante.life}/100)</b>
                            </span>
                            <img src={imgURLDesafiante} alt={desafiante.nome} />

                        </td>
                    </tr>
                    <tr>
                        <td style={{ padding: 4 }}>
                            <img src={imgURLEscolhido} alt={escolhido.nome} />
                            <span style={{ textTransform: "capitalize" }}>
                                <b>{escolhido.nome} ({escolhido.life}/100)</b>
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <td style={{ textAlign: "center", backgroundColor:"white"}}>
                            <button className="btn btn-secondary" onClick={()=>this.atacar()}>Atacar</button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div className="alert alert-warning" role="alert" style={{marginTop:10,textTransform:'uppercase'}}>
                {this.state.mensagem}
            </div>
            </>
        )


    }

    renderizarDesafiantes() {
        return this.state.desafiantes.map(
            (pokemon, i) => {
                return <PokemonTableRow id={pokemon.id} 
                                        key={i} nome={pokemon.nome} 
                                        life={pokemon.life}
                                        jogador={false} />
            }
        )
    }

    mudarEscolhido(index){
        //console.log(index)
        this.setState({escolhido:index})
    }

    async atacar(){
        //await delay(5000);
        let escolhido = this.state.pokeball[this.state.escolhido]
        let desafiante = this.state.desafiantes[this.state.desafiante]

        this.setState({mensagem:`${escolhido.nome} atacou! 20 de dano!`})
        desafiante.life = (desafiante.life - 20)<0 ? 0 : desafiante.life - 20
        if(desafiante.life===0){
            this.setState({mensagem:`${desafiante.nome} desmaiou!`})
            const index = this.proximoDesafiante()
            if(index>=0){
                this.setState({desafiante:index})
            }
        }

        //await delay(1000);
        
    }

    proximoDesafiante(){
        let desafiantes = this.state.desafiantes

        for (let index = 0; index < desafiantes.length; index++) {
            const desafiante = desafiantes[index];
            if(desafiante.life>0) return index
        }
        return -1
    }

    render() {
        return (
            <div style={{
                marginTop: 10,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column'
            }}>

                <h3>Pokemon Arena</h3>
                <table className="table table-bordered" style={{ marginTop: 20, width: '71%' }}>
                    <thead className="thead-dark">
                        <tr>
                            <th style={{ textAlign: "center" }}>Pokeball</th>
                            <th style={{ textAlign: "center" }}>Arena</th>
                            <th style={{ textAlign: "center" }}>Desafiantes</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style={{ width: '10%' }}>
                                <table>
                                    <tbody>
                                    {this.renderizarPokeball()}
                                    </tbody>
                                </table>
                            </td>
                            <td>
                                {this.renderizarArena()}
                            </td>
                            <td style={{ width: '10%' }}>
                                <table>
                                    <tbody>
                                    {this.renderizarDesafiantes()}
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}