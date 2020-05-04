import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom'

import Pokeball from './components/pokeball/Pokeball'
import Pokedex from './components/pokedex/Pokedex'
import Home from './components/Home'
import PokemonInfo from './components/pokemoninfo/PokemonInfo'

export default class App extends Component{

  constructor(props){
    super(props)
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
                  <Link to={'/pokedex'} className='nav-link'>Pokédex</Link>  
                </li>
                <li>
                  <Link to={'/pokeball'} className='nav-link'>Poké Ball</Link>  
                </li>
              </ul>
            </div>
          </nav>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/pokedex' component={Pokedex}/>
            <Route path='/pokemoninfo/:id' component={PokemonInfo}/>
            <Route path='/pokeball' component={Pokeball}/>
          </Switch>
        </div>
      </Router>
    )
  }
}