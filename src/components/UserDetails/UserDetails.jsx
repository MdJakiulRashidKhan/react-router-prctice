import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UserDetails = () => {
    const user = useLoaderData();
    const {name,website}= user;
    return (
        <div className='my-4'>
            <h2 className='text-center'>Details About User : {name}</h2>
            <p className='text-center'>Website : {website}</p>
        </div>
    );
};

export default UserDetails;