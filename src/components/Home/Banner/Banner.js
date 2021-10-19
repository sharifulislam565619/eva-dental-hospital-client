import React from 'react';
import { Carousel } from 'react-bootstrap';
import Typewriter from 'typewriter-effect';
import banner1 from '../../../images/banner1.jpg';
import banner2 from '../../../images/banner2.jpg';
import banner3 from '../../../images/banner3.jpg';
import './Banner.css';


const Banner = () => {

    return (
        <Carousel id="home" className="banner">
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner1}
                    alt="First slide"
                />
                <Carousel.Caption className="hero-title">
                    <div className="d-flex mb-md-5 pb-md-5">
                        <div className="col-md-5"></div>
                        <div className="col-md-7">

                            <Typewriter
                                options={{
                                    strings: ['Eva Dental Hospital'],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />


                            <h4>Smile opens your heart</h4>
                            <p>Your health and comfort are our top priorities</p>
                        </div>
                    </div>


                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner2}
                    alt="Second slide"
                />

                <Carousel.Caption className="hero-title">
                    <div className="d-flex mb-md-5 pb-md-5">
                        <div className="col-md-5"></div>
                        <div className="col-md-7">

                            <Typewriter
                                options={{
                                    strings: ['Eva Dental Hospital'],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />

                            <h4>Smile opens your heart</h4>
                            <p>Your health and comfort are our top priorities</p>
                        </div>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner3}
                    alt="Third slide"
                />

                <Carousel.Caption className="hero-title">
                    <div className="d-flex mb-md-5 pb-md-5">
                        <div className="col-md-5"></div>
                        <div className="col-md-7">

                            <Typewriter
                                options={{
                                    strings: ['Eva Dental Hospital'],
                                    autoStart: true,
                                    loop: true,

                                }}
                            />
                            <h4>Smile opens your heart</h4>
                            <p>Your health and comfort are our top priorities</p>
                        </div>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;