import React from 'react';
import useFirebase from '../hooks/useFirebase';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { getAuth } from 'firebase/auth';
import app from '../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';

const auth = getAuth(app)
const Login = () => {
    // firebase
    // const { singnInWithGoogle } = useFirebase()

    // firebase auth
    const [signInWithGoole] = useSignInWithGoogle(auth);

    // for protecd route
    const location = useLocation();
    const navigate = useNavigate();
    const from = location?.state?.pathname || '/';

    const handleGoogleSignIn = () => {
        signInWithGoole()
            .then(() => {
                navigate(from, { replace: true })
            })
    }
    return (
        <div>

            <div className='register-container'>
                {/* firebase */}
                {/* <button onClick={singnInWithGoogle}>Sign in with google</button> */}
                <button onClick={handleGoogleSignIn}>Sign in with google</button>
                <form action="" className='form'>
                    <h2>Please Login!!!</h2>

                    <input type="email" placeholder='enter your email' />
                    <br />  <br />
                    <input type="password" placeholder='please enter your password' />
                    <br />  <br />
                    <input type="submit" value="Login" />
                    <br /><br />

                </form>
            </div >
        </div>
    );
};

export default Login;