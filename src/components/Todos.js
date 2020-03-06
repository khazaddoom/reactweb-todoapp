import React, { PureComponent } from 'react';
import { Todo } from './Todo';

export class Todos extends React.Component {
    render() {
console.log(this.props.todos)
        return (
           this.props.todos.map(todo => (
               <Todo todoData={todo} deleteTodo={this.props.deleteTodo} toggleToDo = {this.props.toggleToDo}/>
           ))
        );
    }
}

export default Todos
