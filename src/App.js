import React from 'react';
import './App.css';
import { Todos } from './components/Todos';
import AddToDo from './components/AddToDo';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import { FilterOptions } from './components/FilterOptions';

class App extends React.Component {

  state = {
    todos: [
      { id: 1, title: 'Finish Expense app', isComplete: false},
      { id: 2, title: 'Learn ReactJS', isComplete: false},
      { id: 3, title: 'Finish Expense app', isComplete: false}
    ],
    selectedFilter: 'ALL'
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

  getNextId() {
    const largest = this.state.todos.reduce((largest, current) => {
      if(current.id > largest)
        return current.id
      else
        return largest
    }, 1)
    return largest + 1

  }

  addToDo = (data) => {
    this.setState({
      todos: [...this.state.todos, {
        title: data,
        id: this.getNextId(),
        isComplete: false
      }]
    });
  }

  selectedFilter = (type) => {
    this.setState({
      selectedFilter: type
    });    
  }


  render() {
    return (
      <Router>      
        <div >
            <Header />
            <Route exact path="/" >
              
              <div className="main-container">
                <AddToDo addToDo={this.addToDo}/>
                <Todos todos={this.state.todos} deleteTodo={this.deleteToDo} toggleToDo={this.toggleToDo} tobeAppliedFilter={this.state.selectedFilter}/>
                <FilterOptions selectedFilter={this.selectedFilter}/>
              </div>              

            </Route>
            <Route path="/about" component={About} />
        </div>
      </Router>
    );
  }
}

export default App;
