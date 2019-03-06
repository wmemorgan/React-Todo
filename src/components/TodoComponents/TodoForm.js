import React from 'react'

const ToDoForm = props => {
  const { inputValue, addTask, enterTask, clearCompletedTasks } = props
  return (
    <div className="todo-form">
      <form onSubmit={addTask}>
        <input name="task" onChange={enterTask} value={inputValue} placeholder="Enter task"/>
        <button type="submit" className="btn btn-add" >Add Todo</button>
        <button className="btn btn-clear" onClick={clearCompletedTasks}>Clear Completed</button>
      </form>
    </div>
  )
}

export default ToDoForm