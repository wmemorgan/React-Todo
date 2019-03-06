import React from 'react'

import ToDo from './Todo'

const ToDoList = (props) => {
  const { tasks, toggleComplete } = props
  return (
    <div className="todo-list">
      {tasks.map(task => (
        <ToDo task={task} key={task.id} toggleComplete={toggleComplete}/>
      ))}
    </div>
  )
}

export default ToDoList
