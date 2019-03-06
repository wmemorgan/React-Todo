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
    //Initialize localStorage
    localStorage.setItem('taskList', JSON.stringify(taskList))
    console.log(`Initial localStorage.taskList from parent:`, JSON.parse(localStorage.taskList))
    //Initialize state
    this.state = {
      taskList: JSON.parse(localStorage.taskList),
      inputValue: ''
    }
    console.log('Intial state: ', this.state)

    //this.todoElement = React.createRef() -> Future release
  }

  inputChange = e => {
    e.preventDefault()
    this.setState({
      inputValue: e.target.value
    })
  }

  addTask = e => {
    e.preventDefault()
    let date = new Date()
    let timestamp = date.getTime()
    let newTask = {
      task: this.state.inputValue,
      id: timestamp,
      completed: false
    }

    this.setState(prevState => {
      return {
        taskList: [...prevState.taskList, newTask],
        inputValue: ''
      }
    },
      () => {
        localStorage.setItem('taskList', JSON.stringify(this.state.taskList))
        console.log(`updated localStorage.taskList from parent:`, JSON.parse(localStorage.taskList))
      }
    )
  }

  toggleComplete = (id) => {
    console.log(id)
    // this.setState(prevState => {
    //   return { completed: prevState.completed === false ? true : false }
    // })
  }

  clearCompletedTask = e => {
    e.preventDefault()
    let clearedList = this.state.taskList.filter(task => task.completed === false)
    this.setState({taskList: [...clearedList]})
  }

  render() {
    return (
      <div className="App">
        <ToDoList tasks={this.state.taskList} toggleComplete={this.toggleComplete}/> 
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
