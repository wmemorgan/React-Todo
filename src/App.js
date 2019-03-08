import React from 'react';
import { firebase, auth } from './firebase/firebase'

import ToDoList from './components/TodoComponents/TodoList'
import ToDoForm from './components/TodoComponents/TodoForm'
import ToDoSearch from './components/TodoComponents/TodoSearch'

class App extends React.Component {
  constructor() {
    super()
    // //Initialize localStorage
    // localStorage.setItem('taskList', JSON.stringify(taskList))
    // console.log(`Initial localStorage.taskList from parent:`, JSON.parse(localStorage.taskList))
    //Initialize state
    this.state = {
      taskList: [],
      inputValue: '',
      search: ''
    }
    console.log('Intial state: ', this.state)
  }

  writeUserData = () => {
    firebase.database().ref('/').set(this.state)
    console.log(`DATA SAVED`)
  }

  getUserData = () => {
    let ref = firebase.database().ref('/')
    ref.on('value', snapshot => {
      const state = snapshot.val()
      console.log(`downloaded data is: `, state)
      this.setState(state)
    })
    console.log(`DATA RECEIVED`)
  }

  enterTask = e => {
    e.preventDefault()
    this.setState({
      inputValue: e.target.value
    })
  }

  addTask = e => {
    e.preventDefault()
    this.setState(prevState => {
      return {
        taskList: [
          ...prevState.taskList, 
          {
            task: prevState.inputValue,
            id: Date.now(),
            completed: false,
            filtered: false
          }
        ],
        inputValue: '',
      }
    },
      () => {
        localStorage.setItem('taskList', JSON.stringify(this.state.taskList))
        console.log(`updated localStorage.taskList from parent:`, JSON.parse(localStorage.taskList))
      }
    )
  }

  toggleComplete = id => {
    this.setState(prevState => {
      return {
        taskList: prevState.taskList.map(task => {
          if (task.id === id) {
            return {
              task: task.task,
              id: task.id,
              completed: !task.completed,
              filtered: task.filtered
            }
          } else {
            return task
          }
        })
      }
    })
  }

  clearCompletedTask = () => {
    this.setState(prevState => {
      return {
        taskList: prevState.taskList.filter(task => !task.completed)
      }
    })
  }

  searchTask = e => {
    e.preventDefault()
    let searchString = e.target.value.toLowerCase()
    // console.log(`e.target.value: `, searchString)
    this.setState(prevState => {
      let filteredTaskList = prevState.taskList.map(task => {
        if (!task.task.toLowerCase().includes(searchString)) {
          return {
            task: task.task,
            id: task.id,
            completed: task.completed,
            filtered: true
          }
        } else {
          return {
            task: task.task,
            id: task.id,
            completed: task.completed,
            filtered: false
          }
        }
      })

      return {
        taskList: filteredTaskList,
        search: searchString
      }
    })    
  }

  componentDidMount() {
    this.getUserData()
  }

  componentDidUpdate(prevProps, prevState) {
    // check on previous state
    // only write when it's different with the new state
    if (prevState !== this.state) {
      this.writeUserData()
    }
  }

  render() {
    return (
      <div className="App">
        <div className="app-container">
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
          <ToDoList tasks={this.state.taskList} toggleComplete={this.toggleComplete} />
        </div>
      </div>
    );
  }
}

export default App;
