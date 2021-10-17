import React from 'react';
import hr from '../../../images/hr.jpg';
import './About.css';


const About = () => {
    return (
        <div>
            <h2 className="mt-4 text-success">Our Doctors</h2>
            <div><img className="img-fluid mb-3" src={hr} alt="" /></div>

            <div className="provider-block">
                <img className='w-100' pill src="https://image.freepik.com/free-photo/portrait-smiling-handsome-male-doctor-man_171337-5055.jpg" alt="" />
                <h4>Alton jock, DDS</h4>
                <h5>Dentist</h5>

            </div>
        </div>
    );
};

export default About;