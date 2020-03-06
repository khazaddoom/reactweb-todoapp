import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {

    render() {
        return (
            <div style={headerStyles}>
                <h1>Simple ToDoList App</h1>
                <div>
                    <Link to="">Home</Link> | <Link to="/about">About</Link>
                </div>
            </div>
        )
    }
}

export const headerStyles = {
    backgroundColor: 'black',
    color: 'white',
    padding: '3rem 5rem'
}
