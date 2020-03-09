import React from 'react';
import { Todo } from './Todo';
import PropTypes from 'prop-types';

export class Todos extends React.Component {
    render() {        

        let rawToDos = this.props.todos;
        
        if(this.props.tobeAppliedFilter === 'INPROGRESS')
            rawToDos = rawToDos.filter(todo => !todo.isComplete)
        else if(this.props.tobeAppliedFilter === 'COMPLETE')
            rawToDos = rawToDos.filter(todo => todo.isComplete)

        return ( 
            rawToDos.map(todo => (
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
