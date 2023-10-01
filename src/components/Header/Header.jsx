import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='text-center'>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/users" className='ml-6'>Users</NavLink>
                <NavLink to="/posts" className='ml-6'>Posts</NavLink>
                <NavLink to="/about" className='ml-6'>About</NavLink>
                <NavLink to="/contact" className='ml-6'>Contact</NavLink>
                
            </nav>
        </div>
    );
};

export default Header;