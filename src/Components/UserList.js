import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import UserCard from './UserCard';

const UserList = () => {
    const [users, setUsers]=useState([]);
    useEffect(() =>{
        axios
            .get("https://jsonplaceholder.typicode.com/users")
            .then((res) => setUsers(res.data))
            .catch((err) => console.log(err))
    }, [])
  return (
    <div style={{display:"flex", justifyContent:"space-around", flexWrap:"wrap"}}>
        {users.map((user) => (
            <UserCard user={user} />
        ))}
    </div>
  )
}

export default UserList