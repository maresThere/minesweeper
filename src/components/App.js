import React, { Component } from 'react'
import Level from './Level'
import GameBoard from './GameBoard'
// import { get } from './Api'

class App extends Component {
  reset () {
    console.log('resetting')
    this.setState({
      state: 'start'
    })
  }

  render () {
    return <div className='App'>
      <div className='header'>
        <h1>Watch out for the Mines</h1>
        <Level />
        <GameBoard />
      </div>
      <footer>
        <h6>&copy; Built with &hearts; The Iron Yard - St.Pete </h6>
      </footer>
    </div>
  }
}

export default App
