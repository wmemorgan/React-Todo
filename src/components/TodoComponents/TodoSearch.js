import React from 'react'
import './Todo.css'

const TodoSearch = (props) => {
  const { searchTask, search } = props
  return (
    <div className="search-container">
      <input name="search" onChange={searchTask} value={search} placeholder="Search tasks" />
    </div>
  )
}

export default TodoSearch