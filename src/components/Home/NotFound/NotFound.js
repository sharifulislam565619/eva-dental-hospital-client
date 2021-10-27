import React from 'react';
import { Link } from 'react-router-dom';
import error from '../../../images/404.png';

const NotFound = () => {
    return (
        <div className="my-4">
            <img className="w-50" src={error} alt="" /><br />
            <Link to="/home"><button className="btn btn-success">Back Home</button></Link>
        </div>
    );
};

export default NotFound;