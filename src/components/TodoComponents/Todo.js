import React from 'react'
import './Todo.css'

function ToDo(props) {
  const { task, completed } = props.task

  return (
    <div className={completed === true ? 'todo completed':'todo'}>
      {task}
    </div>
  )
}

export default ToDo