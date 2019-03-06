import React, { Component } from 'react'
import './Todo.css'

class ToDo extends Component {
  constructor(props) {
    super(props)
    const { task, id, completed } = this.props.task
    this.state = {
      task,
      id,
      completed
    }
  }
  
  toggleComplete = e => {
    e.preventDefault()
    console.log(e.target)
    this.setState(prevState => {
      return { completed: prevState.completed === false ? true : false }
    })
  }

  render() {
    
    return (
      <div className={this.state.completed === true ? 'todo completed' : 'todo'} onClick={this.toggleComplete}>
        {this.state.task}
      </div>
    )
  }

}

export default ToDo