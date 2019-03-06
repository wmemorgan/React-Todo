import React from 'react';

import ToDoList from './components/TodoComponents/TodoList'
import ToDoForm from './components/TodoComponents/TodoForm'
import ToDoSearch from './components/TodoComponents/TodoSearch'

const taskList = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false,
    filtered: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: true,
    filtered: false
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
      inputValue: '',
      search: ''
    }
    console.log('Intial state: ', this.state)
  }

  enterTask = e => {
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
      completed: false,
      filtered: false
    }

    this.setState(prevState => {
      return {
        taskList: [...prevState.taskList, newTask],
        inputValue: '',
      }
    },
      () => {
        localStorage.setItem('taskList', JSON.stringify(this.state.taskList))
        console.log(`updated localStorage.taskList from parent:`, JSON.parse(localStorage.taskList))
      }
    )
  }

  toggleComplete = (id) => {
    let updateTaskList = this.state.taskList.map(task => {
      if (task.id === id ) {
        task.completed = task.completed === false ? true : false
      }
      return task
    })
    this.setState({taskList: updateTaskList})
  }

  clearCompletedTask = e => {
    e.preventDefault()
    let clearedList = this.state.taskList.filter(task => task.completed === false)
    this.setState({taskList: [...clearedList]})
  }

  searchTask = e => {
    e.preventDefault()
    let searchString = e.target.value.toLowerCase()
    console.log(`e.target.value: `, searchString)
    let filteredTaskList = this.state.taskList.map(task => {
      if (!task.task.toLowerCase().includes(searchString)) {
        task.filtered = true
      } else { task.filtered = false }
      return task
    })
    this.setState({ 
      taskList: filteredTaskList,
      search: searchString
     })
  }

  render() {
    return (
      <div className="App">
        <ToDoList tasks={this.state.taskList} toggleComplete={this.toggleComplete}/> 
        <ToDoForm
          inputValue={this.state.inputValue}
          enterTask={this.enterTask}
          addTask={this.addTask}
          clearCompletedTasks={this.clearCompletedTask}

        />
        <ToDoSearch
          search={this.state.search}
          searchTask={this.searchTask} 
        /> 
      </div>
    );
  }
}

export default App;
