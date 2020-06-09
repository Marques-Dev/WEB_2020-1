import React, {Component} from 'react'
import { connect } from 'react-redux'
import { signout } from '../store/actions/authActionCreator'

class Content extends Component{

    componentDidMount(){
        if (this.props.auth.isLoaded && this.props.auth.isEmpty){
            this.props.history.push('/signin')
        }
    }

    logout(){
        this.props.signout(
            ()=>{
                //console.log(this.props.authMsg)
                this.props.history.push('/signin')
            }
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
                    Conteúdo apenas para usuários <br /><br />
                    <button className='btn btn-danger' onClick={()=>this.logout()}>
                        Logout
                    </button>
                </div>
            </div>
        </div>
        )
    }
}



function mapStateToProps(state) {
    return {
        auth: state.firebaseReducer.auth,
        authMsg: state.authReducer.authMsg
    };
}

function mapDispatchToProps(dispatch) {
    return {
        signout(callback) {
            const action = signout(callback)
            dispatch(action)
        }
    }
}

export default connect(
    mapStateToProps,mapDispatchToProps
)(Content);