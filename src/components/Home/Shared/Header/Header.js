import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../../hooks/useAuth';
import logo from '../../../../images/logo.jpg';
import userUrl from '../../../../images/userPhoto.png';
import './Header.css';

const Header = () => {
    const { user, logOut } = useAuth()
    return (

        <>
            <Navbar className="py-0" bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg">
                <Container >
                    <Nav.Link as={HashLink} to="/home#home"><img style={{ width: '100px', height: "50px", borderRadius: "10px" }} src={logo} alt="" /></Nav.Link>

                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end my-navbar">

                        <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                        <Nav.Link as={HashLink} offset={-150} to="/home#services">Services</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#about">About us</Nav.Link>
                        <Nav.Link as={HashLink} to="/contact">Contact us</Nav.Link>

                        {
                            user?.displayName || user?.email ?
                                <div>  <small className="text-white"> Signed in as: <i className="text-primary">{user?.displayName}</i></small>
                                    <img className="userPhoto" src={user.photoURL || userUrl} alt='' />
                                    <button className="btn btn-danger" onClick={logOut}>
                                        <i className="fas fa-sign-out-alt text-info me-1"></i>Logout</button></div>
                                :

                                <Nav.Link as={Link} to="/login">
                                    <button className="btn btn-primary"><i className="fas fa-sign-in-alt text-info me-1"></i>Login</button>
                                </Nav.Link>}

                    </Navbar.Collapse>

                </Container>
            </Navbar>
        </>
    );
};

export default Header;