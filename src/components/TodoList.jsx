import React, { useState } from 'react'
import { useTransition, animated, useSpring } from '@react-spring/web'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import Button from './Button'
import '../styles/App.css'

function TodoList({ tasks, setTasks, filteredTasks, setFilter, filter }) {
  const [inputValue, setInputValue] = useState('')
  const [editingId, setEditingId] = useState(null)
  const [editText, setEditText] = useState('')

  // Handle input change for adding new tasks
  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }

  // Add a task
  const addTask = () => {
    if (inputValue.trim()) {
      setTasks([
        ...tasks,
        { id: Date.now(), text: inputValue, completed: false },
      ])
      setInputValue('')
    }
  }

  // Delete a task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
    if (editingId === id) {
      setEditingId(null)
      setEditText('')
    }
  }

  // Start editing a task
  const startEditing = (id, text) => {
    setEditingId(id)
    setEditText(text)
  }

  // Handle edit input change
  const handleEditChange = (e) => {
    setEditText(e.target.value)
  }

  // Save edited task
  const saveEdit = (id) => {
    if (editText.trim()) {
      setTasks(
        tasks.map((task) =>
          task.id === id ? { ...task, text: editText } : task
        )
      )
      setEditingId(null)
      setEditText('')
    }
  }

  // Toggle task completion
  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    )
  }

  // Handle filter change
  const handleFilterChange = (e) => {
    setFilter(e.target.value)
  }

  // Animation for select (opacity on hover, matching Button.jsx)
  const [springProps, api] = useSpring(() => ({
    opacity: 1,
    config: { tension: 300, friction: 20 },
  }))
  const handleMouseEnter = () => {
    api.start({ opacity: 0.9 })
  }
  const handleMouseLeave = () => {
    api.start({ opacity: 1 })
  }

  // Animation for task items
  const transitions = useTransition(filteredTasks, {
    keys: (task) => task.id,
    from: { opacity: 0, transform: 'translateY(-20px)' },
    enter: { opacity: 1, transform: 'translateY(0)' },
    leave: { opacity: 0, transform: 'translateY(20px)' },
    config: { tension: 220, friction: 20 },
  })

  return (
    <div className='todo-list'>
      <h2>To-Do List</h2>
      <div className='input-container'>
        <input
          type='text'
          value={inputValue}
          onChange={handleInputChange}
          placeholder='Add a task'
          className='task-input'
        />
        <Button
          label='Add Task'
          onClick={addTask}
          backgroundColor='#14b8a6'
          className='add-button'
        />
      </div>
      <div className='filter-container'>
        <label className='filter-label'>Filter Tasks:</label>
        <div
          className='custom-select-wrapper'
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <animated.select
            value={filter}
            onChange={handleFilterChange}
            className='filter-select'
            style={{ opacity: springProps.opacity }}
          >
            <option value='all'>All</option>
            <option value='incomplete'>Incomplete</option>
            <option value='completed'>Completed</option>
          </animated.select>
          <FontAwesomeIcon icon={faCaretDown} className='custom-select-icon' />
        </div>
      </div>
      <ul className='task-list'>
        {transitions((style, task) => (
          <animated.li style={style} className='task-item' key={task.id}>
            {editingId === task.id ? (
              <div className='edit-container'>
                <input
                  type='text'
                  value={editText}
                  onChange={handleEditChange}
                  className='edit-input'
                />
                <Button
                  label='Save'
                  onClick={() => saveEdit(task.id)}
                  backgroundColor='#6366f1'
                  className='save-button'
                />
                <Button
                  label='Cancel'
                  onClick={() => setEditingId(null)}
                  backgroundColor='#f43f5e'
                  className='cancel-button'
                />
              </div>
            ) : (
              <>
                <span
                  className={
                    task.completed ? 'task-text completed' : 'task-text'
                  }
                >
                  {task.text}
                </span>
                <div className='task-actions'>
                  <Button
                    label={task.completed ? 'Undo' : 'Complete'}
                    onClick={() => toggleComplete(task.id)}
                    backgroundColor={task.completed ? '#f97316' : '#22c55e'}
                    className='complete-button'
                  />
                  {!task.completed && (
                    <Button
                      label='Edit'
                      onClick={() => startEditing(task.id, task.text)}
                      backgroundColor='#6366f1'
                      className='edit-button'
                    />
                  )}
                  <Button
                    label='Delete'
                    onClick={() => deleteTask(task.id)}
                    backgroundColor='#f43f5e'
                    className='delete-button'
                  />
                </div>
              </>
            )}
          </animated.li>
        ))}
      </ul>
    </div>
  )
}

export default TodoList
