import React, { useState } from 'react'
import TodoList from './components/TodoList'
import Counter from './components/Counter'
import Button from './components/Button'
import './styles/App.css'

function App() {
  const [tasks, setTasks] = useState([])
  const [filter, setFilter] = useState('all')

  // Compute filtered tasks
  const filteredTasks = tasks.filter((task) => {
    if (filter === 'incomplete') return !task.completed
    if (filter === 'completed') return task.completed
    return true // 'all'
  })

  return (
    <div className='app'>
      <h1>My To-Do App</h1>
      <Counter title='Task Counter' count={filteredTasks.length} />
      <TodoList
        tasks={tasks}
        setTasks={setTasks}
        filteredTasks={filteredTasks}
        setFilter={setFilter}
        filter={filter}
      />
      <Button
        label='Clear All Tasks'
        onClick={() => setTasks([])}
        backgroundColor='#f44336'
        className='clear-all-button'
      />
    </div>
  )
}

export default App
