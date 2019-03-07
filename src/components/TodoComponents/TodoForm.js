import React from 'react'

const ToDoForm = props => {
  const { inputValue, addTask, enterTask, clearCompletedTasks } = props
  return (
    <div className="todo-form-container">
      <h2>To Do List</h2>
      <form onSubmit={addTask} className="todo-form">
        <input name="task" onChange={enterTask} value={inputValue} placeholder="Enter task" />
        <button type="submit" className="btn btn-add" >Add Task</button>

      </form>
      <button className="btn btn-clear" onClick={clearCompletedTasks}>Clear Completed</button>
    </div>

  )
}

export default ToDoForm