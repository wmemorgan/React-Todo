import React from 'react'
import classNames from 'classnames'
import './Todo.css'

const ToDo = (props) => {
  const { toggleComplete } = props 
  const { task, id, completed, filtered } = props.task
  const todoClassGroup = classNames({
    todo: true,
    completed: completed,
    filtered: filtered
  });
  return (
    <div className={todoClassGroup} onClick={() => toggleComplete(id)}>
      {task}
    </div>
  )
}

export default ToDo