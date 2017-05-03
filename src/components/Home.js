import React from 'react'

const Home = ({history}) => {
  const _click = () => {
    history.push('/game/43')
  }

  return <div className='Home'>
    <div className='menu'>
      <button onClick={_click}>Easy</button>
      <button onClick={_click}>Medium</button>
      <button onClick={_click}>Hard</button>
    </div>
  </div>
}
export default Home
