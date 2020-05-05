import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom'

import Home from './components/Home'
import Pokedex from './components/pokedex/Pokedex'
import PokemonInfo from './components/pokemoninfo/PokemonInfo'
import Pokeball from './components/pokeball/Pokeball'
import PokeArena from './components/pokearena/PokeArena'

export default class App extends Component{

  constructor(props){
    super(props)
    //sessionStorage.clear()
    sessionStorage.setItem('url','https://pokeapi.co/api/v2/pokemon?offset=0&limit=20')
  }

  render(){
    return(
      <Router>
        <div className='container'>
          <nav className='navbar navbar-expand-lg navbar-light bg-light'>
            <Link to={'/'} className='navbar-brand'>Pokemon</Link>
            <div className='collapse navbar-collapse' id='navbarSupportedContent'>
              <ul className='navbar-nav mr-auto'>
                <li>
                  <Link to={'/'} className='nav-link'>Home</Link>  
                </li>
                <li>
                  <Link to={'/pokedex'} className='nav-link'>PokéDex</Link>  
                </li>
                <li>
                  <Link to={'/pokeball'} className='nav-link'>PokéBall</Link>  
                </li>
                <li>
                  <Link to={'/pokearena'} className='nav-link'>PokeArena</Link>  
                </li>
              </ul>
            </div>
          </nav>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/pokedex' component={Pokedex}/>
            <Route path='/pokemoninfo/:id' component={PokemonInfo}/>
            <Route path='/pokeball' component={Pokeball}/>
            <Route path='/pokearena' component={PokeArena}/>
          </Switch>
        </div>
      </Router>
    )
  }
}