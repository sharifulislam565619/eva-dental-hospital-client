import React from 'react';
import { Card, CardGroup, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = (props) => {
    const { id, service, img, fee, desc } = props.service
    return (
        <Col xl={3} lg={3} md={6} sm={12}>
            <CardGroup>
                <Card className="py-2 data-cart">

                    <Card.Img variant="top" className="w-75 mx-auto" src={img} />

                    <Card.Body>
                        <Card.Title><h6><strong>{service}</strong></h6></Card.Title>
                        <Card.Title><h6>Fee: {fee}</h6></Card.Title>
                        <Card.Text>
                            <small> {desc.slice(0, 55)}...</small>
                        </Card.Text>
                    </Card.Body>
                    <Link to={`/services/${id}`}><button className="btn btn-primary">Details</button></Link>

                </Card>
            </CardGroup>
        </Col>
    );
};

export default Service;