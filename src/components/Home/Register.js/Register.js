import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from "../../../hooks/useAuth";
import './Register.css';




const Register = () => {
    const { registerWithEmailPassword, error } = useAuth()

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()


    const handleEmail = (e) => {
        setEmail(e.target.value)



    }
    const handlePassword = (e) => {
        setPassword(e.target.value)


    }

    const handleRegister = (e) => {
        e.preventDefault()
        registerWithEmailPassword(email, password)

    }

    return (
        <div className="register-form py-4">

            <div className="my-cart">
                <h2>Please Register</h2>
                <p className="text-danger">{error}</p>

                <form onSubmit={handleRegister}>

                    <input onBlur={handleEmail} type="email" required placeholder="Enter your email" />
                    <br />
                    <input onBlur={handlePassword} type="password" required placeholder="Enter password" /><br />
                    <input className="register-btn" type="submit" value="Register" /><br />
                </form>
                <span>I have an account <Link to="/login">Login</Link></span><br />


            </div>
        </div>
    );
};

export default Register;