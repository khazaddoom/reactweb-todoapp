import React from 'react';
import './App.css';
import { Todos } from './components/Todos';

class App extends React.Component {

  state = {
    todos: [
      { id: 1, title: 'Finish Expense app', isComplete: false},
      { id: 2, title: 'Learn ReactJS', isComplete: false},
      { id: 3, title: 'Finish Expense app', isComplete: false}
    ]
  }

  deleteToDo = (id) => {

    const newToDos = this.state.todos.filter(item => {
        if(item.id !== id)
          return item;
      });

    this.setState({
      todos: [...newToDos]
    });
  }

  toggleToDo = (id) => {
    this.setState({
      todos: this.state.todos.map(item => {        
        if(item.id === id)
          item.isComplete = !item.isComplete;
        return item;
      })
    })
  }


  render() {
    return (      
      <div>
        <Todos todos={this.state.todos} deleteTodo={this.deleteToDo} toggleToDo = {this.toggleToDo}/>
      </div>
    );
  }
}

export default App;
