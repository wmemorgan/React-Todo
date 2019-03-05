import React from 'react'

function ToDo(props) {
  const { task } = props.task

  return (
    <div className="task-card">
      {task}
    </div>
  )
}

export default ToDo