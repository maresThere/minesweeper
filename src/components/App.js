import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Home from './Home'
import Game from './Game'

// import { get } from './Api'

class App extends Component {
  reset () {
    console.log('resetting')
    this.setState({
      state: 'start'
    })
  }

  render () {
    return <Router>
      <div className='App'>
        <h1><Link to='/'>Watch out for the Mines</Link></h1>
        <main>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/game/:id' exact component={Game} />
          </Switch>
        </main>
        <footer>
          <h6>&copy; Built with &hearts; The Iron Yard - St.Pete </h6>
        </footer>
      </div>
    </Router>
  }
}

export default App
