import React from 'react';

import ToDoList from './components/ToDoComponents/TodoList'
import ToDoForm from './components/ToDoComponents/TodoForm'

const taskList = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: true
  }  
]

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      taskList,
      task: '',
      id: '',
      completed: false
    }

  }

  inputHandler = e => {
    e.preventDefault()
    console.log(e.target.value)
    return e.target.value
  }

  addTask = e => {
    e.preventDefault()
    let newInput = this.inputHandler(e)
    console.log(`input value: ${newInput}`)
    let newTask = {
      task: newInput,
      id: new Date(),
      completed: false
    }

    this.setState(prevState => {
      return {
        taskList: [...prevState.taskList, newTask]
      }
    })
  }

  clearCompletedTask = e => {
    e.preventDefault()
    let clearedList = this.state.taskList.filter(task => task.completed === false)
    this.setState({taskList: [...clearedList]})
  }

  render() {
    return (
      <div className="App">
        <ToDoList tasks={this.state.taskList}/> 
        <ToDoForm 
          onInputChange={this.inputHandler}
          onAddTask={this.addTask} 
          onClearCompletedTasks={this.clearCompletedTask}
        /> 
      </div>
    );
  }
}

export default App;
