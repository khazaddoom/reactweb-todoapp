import React, { Component, useEffect, useState } from 'react'

export default function About() {

    const [text, setText] = useState('')

    useEffect(() => {
        setText(`${Date.now()}`)
    }, [text])

    return (<React.Fragment>
                <h6 style={{padding: '5rem 2rem 0'}}>This is a very simple todo app done using ReactJS | v0.0.1</h6>
                <h6 style={{padding: '0rem 2rem'}}>© 2019 All rights reserved</h6>
            </React.Fragment>);
}
