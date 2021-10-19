import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className="py-4" id="contact">
            <h2 className="pt-4 text-success">Contact us</h2>
            <hr />
            <form action="" >
                <input className="w-50" type="text" name="" placeholder="Enter your name" id="" /><br />
                <input className="w-50" type="email" name="" id="" placeholder="Enter your Email" />
                <br />
                <input className="w-50" type="number" placeholder="Enter Your Phone" name="" id="" />
                <br />
                <textarea className="w-50" name="" id="" placeholder="Message" cols="30" rows="5"></textarea>
                <br />
                <div className="text-start w-50 mx-auto"> <button className="btn btn-outline-dark text-start">Submit</button></div>
            </form>
        </div>
    );
};

export default Contact;