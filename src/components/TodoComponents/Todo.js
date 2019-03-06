import React from 'react'
import './Todo.css'

const ToDo = (props) => {
  const { toggleComplete } = props 
  const { task, id, completed } = props.task
  return (
    <div className={completed === true ? 'todo completed' : 'todo'} onClick={() => toggleComplete(id)}>
      {task}
    </div>
  )
}

export default ToDo