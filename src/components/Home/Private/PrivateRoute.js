import React from 'react';
import { Redirect, Route, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    useLocation()
    const { user } = useAuth()
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user?.email || user?.displayName ? (
                    children
                ) : (
                    <Redirect
                        to={{
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