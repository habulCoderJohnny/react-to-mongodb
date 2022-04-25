import React, { useEffect, useState } from 'react';

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
            <h2>Available user: {users.length}</h2>
            <ul>
                {
                    users.map(user=><li key={user.id}>{user.name} <p>{user.email}</p> <button onClick={() =>handleUserRemover(user._id)}>X</button>
                    </li>)
                }
            </ul>
        </div>
    );
};

export default Home;