import React from 'react'

const ToDoForm = (props) => {
  const { onClearCompletedTasks } = props
  return (
    <div className="todo-form">
      <form>
        <input name="todo"/>
        <button className="btn btn-add">Add Todo</button>
        <button className="btn btn-clear" onClick={onClearCompletedTasks}>Clear Completed</button>
      </form>
    </div>
  )
}

export default ToDoForm