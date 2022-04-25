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
    return (
        <div>
            <h2>Updating User: {user.name}</h2>
        </div>
    );
};

export default UpdateUser;