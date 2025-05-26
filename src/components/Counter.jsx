import React from 'react'
import '../styles/App.css'

function Counter({ title, count }) {
  return (
    <div className='counter'>
      <h2>{title}</h2>
      <p>
        {count} {count === 1 ? 'task' : 'tasks'}
      </p>
    </div>
  )
}

export default Counter
