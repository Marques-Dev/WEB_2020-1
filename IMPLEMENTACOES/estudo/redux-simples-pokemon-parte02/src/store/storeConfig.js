import { createStore, combineReducers} from 'redux'

//arquivo com os reducers, funções que mantem o estado da aplicação
//qualquer action disparada, chama TODOS os reducers
//state: estado anterior
//action: ação que muda o state
const reducers = combineReducers({
    pokemonId: function(state, action){
        //console.log('pokemon ids')
        //console.log(state + ' ' + action.type)
        switch(action.type){
            case 'NOVO_ID':
                return {
                    ...state,
                    id: action.payload
                }
            default:
                return {
                    id:10
                }
        }
    }
})

//criando o store a partir dos reducers
function storeConfig(){
    return createStore(reducers)
}

export default storeConfig