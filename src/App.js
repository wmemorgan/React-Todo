import React from 'react';

import ToDoList from './components/ToDoComponents/ToDoList'
import ToDoForm from './components/ToDoComponents/ToDoForm'

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

  clearCompletedTask = e => {
    e.preventDefault()
    let clearedList = this.state.taskList.filter(task => task.completed === false)
    console.log(clearedList)
    this.setState({taskList: [...clearedList]})
  }

  render() {
    return (
      <div className="App">
        <ToDoList tasks={this.state.taskList}/> 
        <ToDoForm onClearCompletedTasks={this.clearCompletedTask}/> 
      </div>
    );
  }
}

export default App;
