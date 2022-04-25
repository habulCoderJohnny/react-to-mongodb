import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    const [users,setUsers] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/user')
        .then(res=> res.json())
        .then(data => setUsers(data))
    },[]);

    const handleUserRemover = id =>{
        const proceed = window.confirm('Are you sure you wanted delete?')
        if (proceed) {
            console.log('delete user id', id);
            const url = `http://localhost:5000/user/${id}`;
            fetch(url,{
                method:'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
                if (data.deletedCount>0) {
                    console.log('Deleted');
                    alert('Delete Success : database');
                    const remaining = users.filter(user=>user._id !==id)
                    setUsers(remaining);
                }
            })
        }       
    }

    return (
        <div>
            <h2><u>Available user: {users.length}</u></h2>
            <ul>
                {
                    users.map(user=><li key={user.id}>Name: {user.name} <br/> Email: {user.email} <br />
                    <Link to={`/user/update/${user._id}`}><button>Update profile</button></Link>
                    <button onClick={() =>handleUserRemover(user._id)}>Remove X</button>
                    </li>)
                }
            </ul>
        </div>
    );
};

export default Home;