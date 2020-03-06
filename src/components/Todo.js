import React, { PureComponent } from 'react';

export class Todo extends PureComponent {
    render() {
        return (
            <div>
                {this.props.todoData.title}
            </div>
        )
    }
}

export default Todo
