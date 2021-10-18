import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import './ServiceDetails.css';

const ServiceDetail = () => {
    const { id } = useParams()
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch("https://raw.githubusercontent.com/sharifulislam565619/fakeData/main/dentalData.json")
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    const expectDetails = services.find(service => service.id == id)


    return (
        <div className="container my-5 py-5">
            <div className="d-flex">
                <img alt="img" variant="top" className="w-25" src={expectDetails?.img} />
                <div className="ms-3 details_btn">
                    <h2>{expectDetails?.service}</h2>
                    <Card.Text>
                        {expectDetails?.desc}
                    </Card.Text>
                    <Link to="/home"><button className="btn btn-success">Go back</button></Link>
                    <Link to="/contact">  <button className="btn btn-primary">Get Appointment</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetail;