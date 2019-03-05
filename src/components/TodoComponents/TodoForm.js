import React from 'react'

const ToDoForm = (props) => {
  const { onInputChange, addTask, onClearCompletedTasks } = props
  return (
    <div className="todo-form">
      <form onSubmit={addTask}>
        <input name="task" onChange={onInputChange} />
        <button type="submit" className="btn btn-add" >Add Todo</button>
        <button className="btn btn-clear" onClick={onClearCompletedTasks}>Clear Completed</button>
      </form>
    </div>
  )
}

export default ToDoForm