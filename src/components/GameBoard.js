import React, { Component } from 'react'
import Cell from './Cell'
class GameBoard extends Component {
  createGame (i) {
    console.log(i)
    window.fetch(`http://minesweeper-api.herokuapp.com/games?difficulty=${i}`, {method: 'POST'}).then((response) => {
      return response.json()
    }).then((data) => {
      this.id = data.id
      this.board = data.board
      this.state = data.state
      this.mines = data.mines
      this.gameOver = false
      window.location = `games/${this.id}`
    })
  }
  render () {
    let cols = []
    for (let i = 0; i < 8; i++) {
      let cell = []
      for (let r = 0; r < 8; r++) {
        let cellID = `${i}-${r}`
        let col = `${i}`
        let row = `${r}`
        cell.push(<td className='cell' key={cellID} col={col} row={row} />)
      }
      cols.push(<tr key={i}>{cell}</tr>)
    }
    return <table className='cellContainer'>
      {cols}
    </table>
  }
  }

export default GameBoard
