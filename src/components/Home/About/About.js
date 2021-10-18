import React from 'react';
import hr from '../../../images/hr.jpg';
import './About.css';


const About = () => {
    return (
        <div id="about" className="mb-4">
            <h2 className="mt-4 text-success">Our Doctors</h2>
            <div><img className="img-fluid mb-3" src={hr} alt="" /></div>

            <div className="provider-block g-4">
                <div className="doctor_img"> <img src="https://sa1s3optim.patientpop.com/assets/images/provider/photos/2303782.jpg" alt="" /></div>
                <h4>Alton jock, DDS</h4>
                <h5>Dentist</h5>

            </div>
            <div className="provider-block g-4">
                <div className="doctor_img2"> <img src="https://image.freepik.com/free-photo/portrait-smiling-handsome-male-doctor-man_171337-5055.jpg" alt="" /></div>
                <h4>Micel rich, DDS</h4>
                <h5>Dentist</h5>

            </div>
            <div className="provider-block">
                <div className="doctor_img2"> <img src="https://image.freepik.com/free-photo/pleased-young-female-doctor-wearing-medical-robe-stethoscope-around-neck-standing-with-closed-posture_409827-254.jpg" alt="" /></div>
                <h4>De Mira , DDS</h4>
                <h5>Dentist</h5>

            </div>
        </div>
    );
};

export default About;