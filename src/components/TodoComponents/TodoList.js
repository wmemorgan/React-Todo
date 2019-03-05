import React from 'react'

import ToDo from './ToDo'

function ToDoList(props) {
  const { tasks } = props
  return (
    <div className="todo-list">
      {tasks.map(task => (
        <ToDo task={task} key={task.id}/>
      ))}
    </div>
  )
}

export default ToDoList
