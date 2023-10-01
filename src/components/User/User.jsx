import React from 'react';
import { Link } from 'react-router-dom';

const User = ({user}) => {
    const {id,name,email,phone}=user;
    return (
        <div className='border bg-green-500 p-6 rounded-lg'>
            <h2>{name}</h2>
            <p>Email : {email}</p>
            <p>Phone: {phone}</p>
            <Link to={`/user/${id}`}>Show Details</Link>
        </div>
    );
};

export default User;