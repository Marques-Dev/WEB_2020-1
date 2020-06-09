import React, {Component} from 'react'
import { connect } from 'react-redux'


class Content extends Component{
    
    renderMessage(){
        if (this.props.auth.isLoaded && this.props.auth.isEmpty){
            return (
                <strong>Usuário não logado.</strong>
            )
        }

        return (
            <strong>Usuário logado.</strong>
        )
    }

    render(){
        return (
        <div className='content'>
            <div className='card'>
                <div className='card-header'>
                    Conteúdo do Site
                </div>
                <div className='card-body'>
                    Conteúdo apenas para usuários <br />
                    {this.renderMessage()}
                </div>
            </div>
        </div>
        )
    }
}



function mapStateToProps(state) {
    return {
        auth: state.firebaseReducer.auth
    };
}

export default connect(
    mapStateToProps
)(Content);