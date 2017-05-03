import { observable } from 'mobx'

class Game {
@observable board = []

  load (id) {
    window.fetch('http://minesweeper-api.herokuapp.com/games/' + id).then((response) => response.json())
    .then((data) => {
      this.board = data.board
    })
  }
}
// create a single(ton) instance of game class and export it.
const game = new Game()

export default game
