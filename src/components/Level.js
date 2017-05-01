import React, { Component } from 'react'

class Level extends Component {
  render () {
    const level = ['Easy', 'Normal', 'Hard']
    return <div className='Level'>
      {level.map((difficulty, i, val) => (
        <button key={i}>
          {difficulty}
        </button>
      ))}
    </div>
  }
}

export default Level
