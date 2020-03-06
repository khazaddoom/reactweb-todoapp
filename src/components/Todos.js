import React, { PureComponent } from 'react';
import { Todo } from './Todo';

export class Todos extends PureComponent {
    render() {

        return (
           this.props.todos.map(todo => (
               <Todo todoData={todo}/>
           ))
        );
    }
}

export default Todos
