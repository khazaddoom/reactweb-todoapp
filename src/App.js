import React from 'react';
import './App.css';
import { Todos } from './components/Todos';
import AddToDo from './components/AddToDo';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';

class App extends React.Component {

  state = {
    todos: [
      { id: 1, title: 'Finish Expense app', isComplete: false},
      { id: 2, title: 'Learn ReactJS', isComplete: false},
      { id: 3, title: 'Finish Expense app', isComplete: false}
    ]
  }

  deleteToDo = (id) => {

    const newToDos = this.state.todos.filter(item => item.id !== id);

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

  addToDo = (data) => {
    // const newToDos = this.state.todos;
    // newToDos.push()
    this.setState({
      todos: [...this.state.todos, {
        title: data,
        id: 100,
        isComplete: false
      }]
    });
  }


  render() {
    return (
      <Router>      
        <div>
            <Header />
            <Route exact path="/" >
              <AddToDo addToDo={this.addToDo}/>
              <Todos todos={this.state.todos} deleteTodo={this.deleteToDo} toggleToDo={this.toggleToDo}/>
            </Route>
            <Route path="/about" component={About} />
        </div>
      </Router>
    );
  }
}

export default App;
