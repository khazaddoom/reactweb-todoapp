import React from 'react';
import { Todo } from './Todo';
import PropTypes from 'prop-types';

export class Todos extends React.Component {
    render() {

        return (
           this.props.todos.map(todo => (
               <Todo todoData={todo} deleteTodo={this.props.deleteTodo} toggleToDo = {this.props.toggleToDo} />
           ))
        );
    }
}

Todos.propTypes = {
    toggleToDo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired
}

export default Todos
