import React from 'react'

export class AddToDo extends React.Component {
    state = {
        textValue: ''
    }

    onChange = (e) => {
        this.setState({
            textValue: e.target.value
        })
    }

    render() {
        return (
            <div>
                <input type="text" onChange={this.onChange} />
                <button onClick={this.props.addToDo.bind(this, this.state.textValue)}>Add ToDo</button>
            </div>
        )
    }
}

export default AddToDo
