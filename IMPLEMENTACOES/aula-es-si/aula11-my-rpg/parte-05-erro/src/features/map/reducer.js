import { ADD_TILES, SET_TILES } from '../../config/constants'

const initialState = {
    tiles: []
}

const mapReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case ADD_TILES:
            console.log('ADD_TILES')
            console.log(action.payload[6][1])
            return {
                ...state,
                tiles: action.payload
            }
        case SET_TILES:
            console.log('SET_TILES')
            console.log(action.payload[6][1])
            return {
                ...state,
                tiles: action.payload
            }
        default:
            return state
    }
}

export default mapReducer