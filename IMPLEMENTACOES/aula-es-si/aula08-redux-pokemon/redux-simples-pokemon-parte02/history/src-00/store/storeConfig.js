import { createStore, combineReducers} from 'redux'

//qualquer action disparada, chama TODOS os reducers
//state: estado anterior
//action: ação que muda o state
const reducers = combineReducers({
    pokemonId: function(state, action){
        return {
            id:10
        }
    },
    pokemonNames: function(state,action){
        return [
            'Bulbasaur',
            'Pikachu',
            'Meow'
        ]
    }
})

//criando o store a partir dos reducers
function storeConfig(){
    return createStore(reducers)
}

export default storeConfig