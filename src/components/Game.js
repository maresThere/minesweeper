import React, { Component } from 'react'
import game from '../game'
import { observer } from 'mobx-react'

const CLASSNAMES = {
  ' ': 'unrevealed',
  '_': 'empty',
  'F': 'flagged',
  '*': 'bomb',
  '@': 'flagged-bomb',
  '1': 'numbered-1',
  '2': 'numbered-2',
  '3': 'numbered-3',
  '4': 'numbered-4',
  '5': 'numbered-5',
  '6': 'numbered-6',
  '7': 'numbered-7',
  '8': 'numbered-8'
}

@observer
class Game extends Component {
  componentDidMount () {
    // get the id parameter from the url via router
    const id = this.props.match.params.id
    game.load(id) // hey what do you know - this is the function from game.js to load a game.
  }

  render () {
    return <div className='Game'>
      <table>
        <tbody>
          {/* referencing ..game.js' board object */}
          {game.board.map((row, y) => (
            <tr key={y}>
              {row.map((col, x) => (
              // CLASSNAMES WILL GET ADDED AS THEY ARE ALREADY IN EACH BOARD
                <td className={CLASSNAMES[col]} key={x} />
            ))}
            </tr>
        ))}
        </tbody>
      </table>
    </div>
  }
}
export default Game
