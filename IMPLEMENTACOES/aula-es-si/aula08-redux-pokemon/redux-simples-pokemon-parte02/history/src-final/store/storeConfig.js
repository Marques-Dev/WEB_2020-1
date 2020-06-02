import { createStore, combineReducers} from 'redux'
import pokemonIdReducer from './reducers/pokemonId'

//arquivo com os reducers, funções que mantem o estado da aplicação
//qualquer action disparada, chama TODOS os reducers
//state: estado anterior
//action: ação que muda o state
const reducers = combineReducers({
    pokemonId: pokemonIdReducer
})

//criando o store a partir dos reducers
function storeConfig(){
    return createStore(reducers)
}

export default storeConfig