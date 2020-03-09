import React from 'react';
import PropTypes from 'prop-types';

export class Todo extends React.Component {

    getStyle = () => {
        return {
            textDecoration: this.props.todoData.isComplete? 'line-through': 'none'
        }
    }

    render() {
        return (
            <div style={this.getStyle()}>
                <input type="checkbox" onChange={this.props.toggleToDo.bind(this, this.props.todoData.id)} checked={this.props.todoData.isComplete}/>
                {this.props.todoData.title}
                <button className="" onClick={this.props.deleteTodo.bind(this, this.props.todoData.id)}>Delete</button>
            </div>
        )
    }
}

Todo.propTypes = {
    todoData: PropTypes.object.isRequired,
    toggleToDo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired
}
