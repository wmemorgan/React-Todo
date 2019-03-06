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
    <li className={todoClassGroup} onClick={() => toggleComplete(id)}>
      {task}
    </li>
  )
}

export default ToDo