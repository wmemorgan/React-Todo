import React from 'react'

const ToDoForm = props => {
  const { value, onAddTask, onInputChange, onClearCompletedTasks } = props
  return (
    <div className="todo-form">
      <form onSubmit={onAddTask}>
        <input name="task" onChange={onInputChange} value={value} placeholder="Enter task"/>
        <button type="submit" className="btn btn-add" >Add Todo</button>
        <button className="btn btn-clear" onClick={onClearCompletedTasks}>Clear Completed</button>
      </form>
    </div>
  )
}

export default ToDoForm