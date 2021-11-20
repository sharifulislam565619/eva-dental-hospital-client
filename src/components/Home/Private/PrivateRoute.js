import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    useLocation()
    const { user, isLoading } = useAuth()
    if (isLoading) {
        return <Spinner animation="grow" variant="danger" />
    }
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user?.email || user?.displayName ? (
                    children
                ) : (
                    <Redirect
                        to={{
<<<<<<< HEAD

=======
>>>>>>> 3e797b43feea2a697a32a31d92f95d934ec5d13a
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default PrivateRoute;