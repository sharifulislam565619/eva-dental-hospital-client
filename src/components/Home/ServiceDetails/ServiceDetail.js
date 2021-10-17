import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

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
        <Card className="d-flex py-3 justify-content-center align-items-center">
            <Card.Img variant="top" className="w-25" src={expectDetails?.img} />
            <Card.Body>
                <Card.Title>{expectDetails?.service}</Card.Title>
                <Card.Text>
                    {expectDetails?.desc}
                </Card.Text>
                <Link to="/home">  <button className="btn btn-success">Go back</button></Link>
            </Card.Body>
        </Card>
    );
};

export default ServiceDetail;