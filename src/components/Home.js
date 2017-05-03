import React from 'react'
import game from '../game'
import { Redirect } from 'react-router-dom'
import { observer } from 'mobx-react'

const Home = ({history}) => {
  if (game.id) return <Redirect to={`/game/${game.id}`} />

  const _click = () => {
    game.create()
  }

  return <div className='Home'>
    <div className='menu'>
      <button onClick={_click}>Easy</button>
      <button onClick={_click}>Medium</button>
      <button onClick={_click}>Hard</button>
    </div>
  </div>
}
export default observer(Home)
