import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom'

import List from './components/Pokedex'
import Home from './components/Home'

export default class App extends Component{

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
                  <Link to={'/list'} className='nav-link'>List</Link>  
                </li>
              </ul>
            </div>
          </nav>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/list' component={List}/>
          </Switch>
        </div>
      </Router>
    )
  }
}