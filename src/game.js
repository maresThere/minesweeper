import { observable } from 'mobx'

class Game {
@observable id
@observable board = []

  load (id) {
    window.fetch('http://minesweeper-api.herokuapp.com/games/' + id).then((response) => response.json())
    .then((data) => {
      // CHANGE observable properties
      this.board = data.board
    })
  }

  create () {
    window.fetch('http://minesweeper-api.herokuapp.com/games/', { method: 'POST' }).then((response) => response.json())
    .then((data) => {
      // CHANGE observable properties
      this.id = data.id
      this.board = data.board
    })
  }
}

// create a single(ton) instance of game class and export it.
const game = new Game()

export default game
