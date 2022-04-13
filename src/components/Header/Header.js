import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../hooks/useFirebase';
import './Header.css'

const Header = () => {
    const { user, handleSignOut } = useFirebase();
    return (
        <div className='header'>
            <nav>
                <Link to={'/'}>Home</Link>
                <Link to={'/products'}>Products</Link>
                <Link to={'/register'}>Register</Link>


                {user?.uid ?
                    <button onClick={handleSignOut}>SignOut</button>
                    :
                    <Link to={'/login'}>Login</Link>
                }
                <span>{user?.uid && user.displayName}</span>

            </nav>
        </div>
    );
};

export default Header;