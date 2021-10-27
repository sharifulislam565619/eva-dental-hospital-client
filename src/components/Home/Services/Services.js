import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import hr from '../../../images/hr.jpg';
import Service from '../Service/Service';

const Services = () => {

    const [services, setServices] = useState([])
    useEffect(() => {
        fetch("https://raw.githubusercontent.com/sharifulislam565619/fakeData/main/dentalData.json")
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className="container mt-5" id="services">
            <h2 className="mt-4 text-success">Our Services</h2>
            <div><img className="img-fluid mb-3" src={hr} alt="" /></div>

            <Row className="g-4">
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </Row>
        </div>
    );
};

export default Services;