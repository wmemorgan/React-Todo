import React from 'react'

function ToDoForm(props) {
  return (
    <div className="todo-form">
      <form>
        <input name="todo"/>
        <button>Add Todo</button>
        <button>Clear Completed</button>
      </form>
    </div>
  )
}

export default ToDoForm