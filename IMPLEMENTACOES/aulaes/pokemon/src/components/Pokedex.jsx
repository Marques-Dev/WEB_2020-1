import React, { Component } from 'react'
import axios from 'axios'
import Spinner from 'react-bootstrap/Spinner'
import TableRow from './PokedexTableRow'

export default class List extends Component {

    constructor(props) {
        super(props)
        //console.log('constructor')
        this.state = {
            pokemons: [],
            next: '',
            previous: '',
            count: 0,
            pagina: 0,
            offset: 20,
            loading: false
        }

    }

    componentDidMount() {
        //console.log('componentDidMount')
        const url = sessionStorage.getItem('url')
        this.getPokemonData(url)
    }

    getPokemonData(url) {
        sessionStorage.setItem('url',url)
        axios.get(url)
            .then(
                (res) => {
                    this.setState({
                        count: res.data.count,
                        pokemons: res.data.results,
                        previous: res.data.previous,
                        next: res.data.next,
                        loading: false
                    })
                    /*console.log(url)
                    console.log(this.state.previous)
                    console.log(this.state.next)*/

                }
            )
            .catch(
                (error) => {
                    console.log(error)
                }
            )
    }

    montarTabela() {
        if (!this.state.pokemons) return
        return this.state.pokemons.map(
            (pokemon, i) => {

                return <TableRow pokemon={pokemon}
                    key={i}
                    position={(this.state.pagina * this.state.offset) + (i + 1)}
                />
            }
        )
    }

    proximo() {
        //console.log('proximo')
        if (this.state.next) {
            this.setState({ pagina: this.state.pagina + 1, loading: true })
            this.getPokemonData(this.state.next)
        }
    }

    anterior() {
        //console.log('anterior')
        if (this.state.previous) {
            this.setState({ pagina: this.state.pagina - 1, loading: true })
            this.getPokemonData(this.state.previous)
        }
    }

    renderizarConteudo() {
        if (this.state.loading) {
            return (
                <tbody>
                    <tr>
                        <td style={{ textAlign: "center", verticalAlign: "middle", paddingTop:'20px' }} colSpan='4'>
                            <Spinner animation="border"/><h1> Loading...</h1>
                        </td>
                    </tr>
                </tbody>
            )
        }

        return (
            <>
            <tbody>
                {this.montarTabela()}
            </tbody>
            <tfoot>
                <tr>
                    <td colSpan='4' style={{ textAlign: "center", verticalAlign: "middle" }}>
                        <button className="btn btn-secondary"
                            disabled={!this.state.previous}
                            onClick={() => this.anterior()}>
                            Anterior
                                </button>
                        <button className="btn btn-secondary"
                            style={{ marginLeft: 20 }}
                            disabled={!this.state.next}
                            onClick={() => this.proximo()}>
                            Próximo
                                </button>
                    </td>
                </tr>
            </tfoot>
            </>
        )
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
                
                <h3>Pokédex</h3> ({this.state.count} Pokemons)
                <table className="table table-striped table-sm table-bordered" style={{ marginTop: 20, width: '80%' }}>
                    <thead className="thead-dark">
                        <tr>
                            <th style={{ textAlign: "center", width: '20%' }}>ID</th>
                            <th style={{ textAlign: "center", width: '20%' }}>Nome</th>
                            <th colSpan='2'></th>
                        </tr>
                    </thead>
                    {this.renderizarConteudo()}
                </table>
            </div>
        )
    }
}