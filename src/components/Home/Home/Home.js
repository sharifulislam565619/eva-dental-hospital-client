import React from 'react';
import useAuth from '../../../hooks/useAuth';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Services from '../Services/Services';

const Home = () => {
    const { user } = useAuth()
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <About></About>
            {user?.displayName && <Contact></Contact>}

        </div>
    );
};

export default Home;