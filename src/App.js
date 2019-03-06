import React from 'react';

import ToDoList from './components/TodoComponents/TodoList'
import ToDoForm from './components/TodoComponents/TodoForm'

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
      completed: false,
      inputValue: ''
    }

    //Add data to localStorage
    localStorage.setItem('newTask', '')
    console.log(`Initial localStorage.newTask from parent: ${JSON.stringify(localStorage.newTask)}`)
    localStorage.setItem('taskList', taskList.map(task=>JSON.stringify(task)))
    console.log(`Initial localStorage.taskList from parent:`, localStorage.taskList)
  }

  inputChange = e => {
    e.preventDefault()
    this.setState({
      inputValue: e.target.value
    }, () => {
      localStorage.setItem('newTask', this.state.inputValue)
    })
  }

  addTask = e => {
    e.preventDefault()
    console.log(`localStorage from parent: ${localStorage.newTask}`)
    let newTask = {
      task: localStorage.newTask,
      id: new Date(),
      completed: false
    }

    this.setState(prevState => {
      return {
        taskList: [...prevState.taskList, newTask],
        inputValue: ''
      }
    })

    // localStorage.setItem('taskList', this.state.taskList.map(task => JSON.stringify(task)))
    // console.log(`updated localStorage.taskList from parent:`, localStorage.taskList)
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
          value={this.state.inputValue}
          onInputChange={this.inputChange}
          onAddTask={this.addTask}
          onClearCompletedTasks={this.clearCompletedTask}
        /> 
      </div>
    );
  }
}

export default App;
