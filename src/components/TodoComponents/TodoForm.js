import React from 'react'

const ToDoForm = props => {
  const { inputValue, addTask, enterTask, clearCompletedTasks, search, searchTask } = props
  return (
    <div className="todo-form">
      <form onSubmit={addTask}>
        <input name="task" onChange={enterTask} value={inputValue} placeholder="Enter task"/>
        <button type="submit" className="btn btn-add" >Add Todo</button>
        <button className="btn btn-clear" onClick={clearCompletedTasks}>Clear Completed</button>
        <input name="search" onChange={searchTask} value={search} placeholder="Search tasks" />
      </form>
    </div>
  )
}

export default ToDoForm