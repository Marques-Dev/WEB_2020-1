import React, { Component } from 'react'
import axios from 'axios'
import PokemonMoveDetail from './PokemonInfoTableRow'
import { Link } from 'react-router-dom'


export default class PokemonInfo extends Component {

    constructor(props) {
        super(props)
        this.state =
        {
            name: '',
            height: 0,
            order: 0,
            weight: 0,
            sprite_default: '',
            sprite_back: '',
            moves: []
        }
    }

    componentDidMount() {
        const url = `https://pokeapi.co/api/v2/pokemon/${this.props.match.params.id}/`
        axios.get(url)
            .then((res) => {
                this.setState({
                    id: this.props.match.params.id,
                    name: res.data.name,
                    height: res.data.height,
                    order: res.data.order,
                    weight: res.data.weight,
                    sprite_default: res.data.sprites.front_default,
                    sprite_back: res.data.sprites.back_default,
                    moves: res.data.moves
                })
            })
            .catch(error => console.log(error))
    }

    getMoves(){
        return this.state.moves.map(
            (item,i)=>{
                return <PokemonMoveDetail move={item.move} key={i}/>
                //return ` ${item.move.name} `
            }
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

                <h3>Pokemon Info</h3>
                <table className="table table-striped table-sm table-bordered" style={{ marginTop: 20, width: '80%' }}>
                    <thead className="thead-dark">
                        <tr>
                            <th style={{ textAlign: "center" , verticalAlign: "middle"}} colSpan='2'>
                                <div style={{textTransform:"capitalize"}}>{this.state.name}</div>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td width='30%' style={{ textAlign: "center" , verticalAlign: "middle"}}>
                                <img src={this.state.sprite_default} alt={this.state.id} />
                                <img src={this.state.sprite_back} alt={this.state.id} />
                            </td>
                            <td>
                                <ul>
                                    <li>ID : {this.state.id}</li>
                                    <li>Height : {this.state.height}</li>
                                    <li>Order : {this.state.order}</li>
                                    <li>Weight : {this.state.weight}</li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan='2' style={{ textAlign: "center" , verticalAlign: "middle"}}>
                                <strong>Movimentos</strong>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan='2' style={{padding:0}}>
                                <table className='table table-hover' style={{margin:0}}>
                                <tbody>
                                    {this.getMoves()}
                                </tbody>
                                </table>
                            </td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan='2' style={{ textAlign: "center" , verticalAlign: "middle"}}>
                                <Link to={'/pokedex'} className="btn btn-primary">Voltar</Link>
                            </td>
                        </tr>
                    </tfoot>
                </table>

            </div>
        )
    }
}