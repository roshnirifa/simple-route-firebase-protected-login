import React from 'react';
import './Register.css'

const Register = () => {
    return (
        <div className='register-container'>
            <form action="" className='form'>
                <h2>Please Register!!!</h2>
                <input type="text" placeholder='enter your name' />
                <br />  <br />
                <input type="email" placeholder='enter your email' />
                <br />  <br />
                <input type="password" placeholder='please enter your password' />
                <br />  <br />
                <input type="submit" value="submit" />
                <br /><br />
                <button>Sign in with google</button>
            </form>
        </div >
    );
};

export default Register;