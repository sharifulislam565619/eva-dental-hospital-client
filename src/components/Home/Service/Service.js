import React from 'react';
import { Card, CardGroup, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = (props) => {
    const { id, service, img, fee, desc } = props.service
    return (
        <Col xl={3} lg={3} md={6} sm={12}>
            <CardGroup>
                <Card>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title><h6>{service}</h6></Card.Title>
                        <Card.Title>{fee}</Card.Title>
                        <Card.Text>
                            <small> {desc.slice(0, 60)}...</small>
                        </Card.Text>
                    </Card.Body>
                    <Link to={`/services/${id}`}><button className="btn btn-primary">Details</button></Link>

                </Card>
            </CardGroup>
        </Col>
    );
};

export default Service;