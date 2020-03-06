import React from 'react';
import './App.css';
import { Todos } from './components/Todos';

class App extends React.Component {

  state = {
    todos: [
      { id: 1, title: 'Finish Expense app', isComplete: false},
      { id: 2, title: 'Learn ReactJS', isComlete: false},
      { id: 3, title: 'Finish Expense app', isComplete: false}
    ]
  }

  render() {
    return (      
      <div>
        <Todos todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
