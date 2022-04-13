import React from 'react';
import useFirebase from '../hooks/useFirebase';

const Home = () => {
    const { user } = useFirebase()
    return (
        <div>
            <h2>this is home</h2>
            <h3>{user ? user.displayName : 'nobody'}</h3>
        </div>
    );
};

export default Home;