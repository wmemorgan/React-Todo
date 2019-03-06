import React from 'react'

import ToDo from './Todo'

const ToDoList = (props) => {
  const { tasks, toggleComplete } = props
  return (
    <div className="todo-list">
      <ol className="todo-list-container">
        {tasks.map(task => (
          <ToDo task={task} key={task.id} toggleComplete={toggleComplete} />
        ))}
      </ol>
    </div>
  )
}

export default ToDoList
