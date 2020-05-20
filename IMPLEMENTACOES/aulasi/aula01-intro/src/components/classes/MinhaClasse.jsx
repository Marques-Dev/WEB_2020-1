import React,{Component} from 'react'




/*export default props=>
    <div>
        Oi, eu sou o {props.nome}
    </div>*/



export default class MinhaClasse extends Component{

    render(){
        return(
            <div>Oi, eu sou o {this.props.nome}</div>
        )
    }
}