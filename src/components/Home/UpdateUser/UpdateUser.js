import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UpdateUser = () => {
    const {id,name} = useParams();
    const [user, setUser] = useState({});
    useEffect(()=>{
        const url = `http://localhost:5000/user/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setUser(data));
    },[])

    const handleUpdateUser = event =>{
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const updatedUser = {name,email};

        // UPDARTE data to the server
        // fetch put
        const url = `http://localhost:5000/user/${id}`;
        fetch(url, {
            method:'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedUser)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log('success', data);
            alert('user updated: database')
            event.target.reset();
        })
    }
    return (
        <div>
            <h2>Updating User of {user.name}</h2>
            <form onSubmit={handleUpdateUser}>
                <input type="text" name="name" placeholder='update name' required/><br />
                <input type="email" name="email" placeholder='update email' required/> <br />
                <input type="submit" value="UPDATE" />
            </form>
        </div>
    );
};

export default UpdateUser;