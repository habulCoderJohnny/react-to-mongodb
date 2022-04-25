import React from 'react';
import '../App.css';
import { useEffect, useState } from 'react';

const FormBasic = () => {
    const [users, setUsers] = useState([]);
    //Load Data
    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, []);

    const submitForm = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        // console.log(name,email);
        const user = { name, email };

        // POST TO server SENT form DATA request to server step#1
        fetch('http://localhost:5000/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        })
            .then(res => res.json())
            .then(data => {
                const newUsers = [...users, data]; //newuser show to Ui step#2
                setUsers(newUsers);
                console.log('Success:', data);
            })
    }
    return (
        <div className="App">
            <h1>MY SERVER DATA : <span style={{ color: 'green' }}>{users.length}</span></h1>
            <form onSubmit={submitForm}>
                <input type="text" name="name" placeholder="Your Name" />
                <input type="text" name="email" placeholder="Your Mail" />
                <input type="submit" value="create user" />
            </form>
            <ul>
                {
                    users.map(user => <li key={user.id}>{user.id}|{user.name}|{user.email}</li>)
                }
            </ul>

        </div>
    );
};

export default FormBasic;