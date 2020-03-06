import React, { PureComponent } from 'react';

export class Todo extends React.Component {

    getStyle = () => {
        return {
            textDecoration: this.props.todoData.isComplete? 'line-through': 'none'
        }
    }

    render() {
        return (
            <div style={this.getStyle()}>
                <input type="checkbox" onChange={this.props.toggleToDo.bind(this, this.props.todoData.id)} />
                {this.props.todoData.title}
                <button onClick={this.props.deleteTodo.bind(this, this.props.todoData.id)}>Delete</button>
            </div>
        )
    }
}

export default Todo
