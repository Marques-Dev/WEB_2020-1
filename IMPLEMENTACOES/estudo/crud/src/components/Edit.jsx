import React, { Component } from 'react'
import axios from 'axios'

export default class Edit extends Component {

    constructor(props){
        super(props)
        this.state = {nome:'',curso:'',IRA:''}

        this.setNome = this.setNome.bind(this)
        this.setCurso = this.setCurso.bind(this)
        this.setIRA = this.setIRA.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    componentDidMount(){
        //console.log("id: " + this.props.match.params.id)
        axios.get('http://localhost:3001/estudantes/'+this.props.match.params.id)
        .then(
            (res)=>{
                this.setState(
                    {
                        nome:res.data.nome,
                        curso:res.data.curso,
                        IRA:res.data.IRA
                    }
                )
            }
        )
        .catch(
            (error)=>{
                console.log(error)
            }
        )
    }

    setNome(e){
        this.setState({nome:e.target.value})
    }

    setCurso(e){
        this.setState({curso:e.target.value})
    }

    setIRA(e){
        this.setState({IRA:e.target.value})
    }

    onSubmit(e){
        e.preventDefault()
        const estudanteAtualiazado = 
            {nome:this.state.nome,
            curso:this.state.curso,
            IRA:this.state.IRA}

            axios.put('http://localhost:3001/estudantes/'+this.props.match.params.id,estudanteAtualiazado)
            .then(
                res=>{
                    //console.log(res.data)
                    this.props.history.push('/list');
                }
            )
            .catch(error=>console.log(error))

        
    }

    render() {
        return (
            <div style={{marginTop: 10}}>
                <h3>Editar Estudante</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Nome:  </label>
                        <input type="text" className="form-control"
                               value={this.state.nome} onChange={this.setNome}/>
                    </div>
                    <div className="form-group">
                        <label>Curso: </label>
                        <input type="text" className="form-control"
                               value={this.state.curso} onChange={this.setCurso}/>
                    </div>
                    <div className="form-group">
                        <label>IRA: </label>
                        <input type="text" className="form-control"
                               value={this.state.IRA} onChange={this.setIRA}/>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Editar" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}