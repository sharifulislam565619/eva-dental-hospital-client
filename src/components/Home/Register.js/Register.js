import React, { useState } from 'react';
<<<<<<< HEAD
import { Link, useHistory, useLocation } from 'react-router-dom';
=======
import { Link } from 'react-router-dom';
>>>>>>> 3e797b43feea2a697a32a31d92f95d934ec5d13a
import useAuth from "../../../hooks/useAuth";
import './Register.css';




<<<<<<< HEAD

const Register = () => {
	const { registerWithEmailPassword, error } = useAuth()

	const [email, setEmail] = useState()
	const [password, setPassword] = useState()
	const [name, setName] = useState()

	const history = useHistory()
	const location = useLocation()
	const url = location?.state?.from || '/home'




	const handleName = (e) => {
		setName(e.target.value)
	}

	const handleEmail = (e) => {
		setEmail(e.target.value)



	}
	const handlePassword = (e) => {
		setPassword(e.target.value)


	}

	const handleRegister = (e) => {
		e.preventDefault()
		registerWithEmailPassword(email, password, name, history, url)

	}

	return (
		<div className="register-form py-4">

			<div className="my-cart fs-6">
				<h2>Please Register</h2>
				<p className="text-danger">{error}</p>

				<form onSubmit={handleRegister}>

					<input onBlur={handleName} type="text" required placeholder="Enter Your Name" />
					<br />
					<input onBlur={handleEmail} type="email" required placeholder="Enter Your Email" />
					<br />
					<input onBlur={handlePassword} type="password" required placeholder="Enter Password" /><br />
					<input className="register-btn" type="submit" value="Register" /><br />
				</form>
				<span>I have an account <Link to="/login">Login</Link></span><br />


			</div>
		</div>
	);
=======
const Register = () => {
    const { registerWithEmailPassword, error } = useAuth()

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [name, setName] = useState()


    const handleName = (e) => {
        setName(e.target.value)
    }

    const handleEmail = (e) => {
        setEmail(e.target.value)



    }
    const handlePassword = (e) => {
        setPassword(e.target.value)


    }

    const handleRegister = (e) => {
        e.preventDefault()
        registerWithEmailPassword(email, password, name)

    }

    return (
        <div className="register-form py-4">

            <div className="my-cart fs-6">
                <h2>Please Register</h2>
                <p className="text-danger">{error}</p>

                <form onSubmit={handleRegister}>

                    <input onBlur={handleName} type="text" required placeholder="Enter Your Name" />
                    <br />
                    <input onBlur={handleEmail} type="email" required placeholder="Enter Your Email" />
                    <br />
                    <input onBlur={handlePassword} type="password" required placeholder="Enter Password" /><br />
                    <input className="register-btn" type="submit" value="Register" /><br />
                </form>
                <span>I have an account <Link to="/login">Login</Link></span><br />


            </div>
        </div>
    );
>>>>>>> 3e797b43feea2a697a32a31d92f95d934ec5d13a
};

export default Register;