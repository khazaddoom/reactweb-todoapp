import {useState, useEffect} from 'react';

export default function Profile() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [fullName, setFullName] = useState('')

    useEffect(() =>{
        setFullName(firstName+lastName)
    },[firstName, lastName])
    return <h1>
        <input value={firstName} onChange={e => setFirstName(e.target.value)} />
        <input value={lastName} onChange={e => setLastName(e.target.value)} />
        {fullName}
    </h1>
}