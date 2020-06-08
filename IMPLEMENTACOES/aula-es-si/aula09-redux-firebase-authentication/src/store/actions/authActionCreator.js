import { SIGNUP_SUCCESS, SIGNUP_ERROR } from "./actionTypes";
import firebase from '../../utils/firebase'

export const signup = (email,password) => async dispatch => {
    try{
        firebase.auth()
        .createUserWithEmailAndPassword(email,password)
        .then(
            ()=>{
                dispatch({
                    type: SIGNUP_SUCCESS,
                    payload: 'Conta criada com sucesso!'
                })
            }
        )
        .catch(
            (error)=>{
                dispatch({
                    type: SIGNUP_ERROR,
                    payload: 'Algum erro ocorreu durante a criação da conta. Tente novamente.'
                })
            }

        )

    }catch(error){
        (error)=>{
            dispatch({
                type: SIGNUP_ERROR,
                payload: 'Algum erro ocorreu durante a criação da conta. Tente novamente.'
            })
        }
    }
}