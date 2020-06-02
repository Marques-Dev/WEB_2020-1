import {NOVO_ID} from '../actions/types'

const initialState = {
    id:10
}

export default function(state = initialState, action){
    //console.log('pokemon ids')
    //console.log(state + ' ' + action.type)
    switch(action.type){
        case NOVO_ID:
            return {
                ...state,
                id: action.payload
            }
        default:
            return state
    }
}