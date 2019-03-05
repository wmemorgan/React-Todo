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
    completed: false
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
    console.log(this.state.taskList)
  }

  render() {
    return (
      <div className="App">
        <ToDoList tasks={this.state.taskList}/> 
        <ToDoForm /> 
      </div>
    );
  }
}

export default App;
