import React from 'react'
import '../App.css'

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
                <input className="input" type="text" onChange={this.onChange} />
                <button className="add-todo" onClick={this.props.addToDo.bind(this, this.state.textValue)}>Add ToDo</button>
            </div>
        )
    }
}

export default AddToDo
