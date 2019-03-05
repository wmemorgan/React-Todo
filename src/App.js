import React from 'react';

import ToDoList from './components/ToDoComponents/ToDoList'
import ToDoForm from './components/ToDoComponents/ToDoForm'

const todos = [
  
]

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      task: '',
      id: '',
      completed: false
    }
  }

  render() {
    return (
      <div className="App">
        <ToDoList /> 
        <ToDoForm /> 
      </div>
    );
  }
}

export default App;
