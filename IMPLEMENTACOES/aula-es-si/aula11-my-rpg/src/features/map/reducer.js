import { ADD_TILES } from '../../config/constants'

const initialState = {
    tiles: []
}

const mapReducer = (state=initialState, action) => {
    switch(action.type){
        case ADD_TILES:
            return {
                ...state,
                tiles: action.payload
            }
        default:
            return state
    }
}

export default mapReducer