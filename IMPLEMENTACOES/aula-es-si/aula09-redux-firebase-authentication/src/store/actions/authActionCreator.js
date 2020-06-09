import { SIGNUP_SUCCESS, SIGNUP_ERROR } from "./actionTypes";
import firebase from '../../utils/firebase'

export const signup = (email, password, callback) => async dispatch => {
    try {
        firebase.auth()
            .createUserWithEmailAndPassword(email, password)
            .then(
                () => {
                    firebase.auth().onAuthStateChanged(function (user) {
                        if (user) {
                            // User is signed in.
                            dispatch({
                                type: SIGNUP_SUCCESS,
                                payload: 'Conta criada com sucesso!'
                            })
                            callback()
                        } else {
                            // No user is signed in.
                            dispatch({
                                type: SIGNUP_ERROR,
                                payload: 'Não foi possível conectar o usuário. Tente novamente.'
                            })
                            callback()
                        }
                    })//firebase.auth().onAuthStateChanged
                    
                }
            )//then
            .catch(
                (error) => {
                    dispatch({
                        type: SIGNUP_ERROR,
                        payload: `Erro na criação do usuário: ${error}`
                    })
                    callback()
                }
            )//catch

    } catch (error) {

        dispatch({
            type: SIGNUP_ERROR,
            payload: `Erro na conexão com o firebase: ${error}`
        })
        callback()
    }
}