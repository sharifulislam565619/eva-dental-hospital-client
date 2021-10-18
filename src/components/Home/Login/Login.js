import React, { useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Login.css';








const Login = () => {
    const { signInWithEmailPassword, handleGoogleSignIn, error, handleFacebookSignIn } = useAuth()
    const [email, setEmail] = useState([])
    const [password, setPassword] = useState([])



    const history = useHistory()
    const location = useLocation()
    const url = location?.state?.from

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleSignInEmailPassword = () => {

        // e.preventDefault()
        signInWithEmailPassword(email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                //setUser(user)
            })
            .catch((error) => {


                // setError("Enter your valid email password")
            });

        history.push(url)




    }

    const handleUsingGoogleSignIn = () => {
        handleGoogleSignIn()
            .then((result) => {

                history.push(url)

            }).catch((error) => {


            });
    }

    const handleUsingFacebookSignIn = () => {
        handleFacebookSignIn()
            .then((result) => {
                history.push(url)

            })
            .catch((error) => {



            });
    }


    return (
        <div className="login-form">

            <div className="my-cart">
                <h2>Please login</h2>
                <p className="text-danger">{error}</p>

                <form onSubmit={handleSignInEmailPassword} action="">

                    <input onChange={handleEmail} type="email" placeholder="Enter your email" />
                    <br />
                    <input onChange={handlePassword} type="password" placeholder="Enter password" /><br />
                    <input className="login-btn" type="submit" value="Login" /><br />
                </form>
                <Link to="/">Forgot password</Link><br />
                <div className="mb-2">
                    <span >Create a new account <Link to="/register">Register</Link></span>
                </div><br />
                <p >----- Or login -----</p>
                <button className="online-btn google " onClick={handleUsingGoogleSignIn}><i className="fab fa-google"></i> Google</button>
                <button className="online-btn facebook" onClick={handleUsingFacebookSignIn}><i className="fab fa-facebook"></i> Facebook</button>

            </div>
        </div>
    );
};

export default Login;