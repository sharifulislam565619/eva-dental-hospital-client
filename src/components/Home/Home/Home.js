import React from 'react';
<<<<<<< HEAD
=======
import useAuth from '../../../hooks/useAuth';
>>>>>>> 3e797b43feea2a697a32a31d92f95d934ec5d13a
import About from '../About/About';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Services from '../Services/Services';

const Home = () => {
<<<<<<< HEAD

=======
    const { user } = useAuth()
>>>>>>> 3e797b43feea2a697a32a31d92f95d934ec5d13a
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <About></About>
<<<<<<< HEAD
            <Contact></Contact>
=======
            {user?.displayName && <Contact></Contact>}
>>>>>>> 3e797b43feea2a697a32a31d92f95d934ec5d13a

        </div>
    );
};

export default Home;