import React from 'react';
import './AboutMe.css'
import myImage from '../../../../images/my/62454129_2280578168863570_7336807789525729280_n.jpg'
import { Col, Row } from 'react-bootstrap';
import Typewriter from 'typewriter-effect'

const AboutMe = () => {
    return (

        <div>
            <div id="home" className="about-container">

                <Row>
                    <Col xs={12} md={6} className="mt-5 type">
                        <h6 className="world" >WELCOME TO MY WORLD</h6>
                        <h2 className="jon">HI,I AM FAIZ ULLAH</h2>
                        <Typewriter
                            onInit={(typeWriter) => {
                                typeWriter.typeString("FRONT END DEVELOPER")
                                    .pauseFor(2000)
                                    .deleteAll()
                                    .typeString("REACT DEVELOPER")
                                    .pauseFor(2000)
                                    .deleteAll()
                                    .typeString("JAVASCRIPT DEVELOPER")
                                    .pauseFor(2000)
                                    .deleteAll()
                                    .start()

                            }}
                        ></Typewriter>


                        <h3 className="jon">Based in Bangladesh</h3>
                    </Col>
                    <Col xs={12} md={6}>
                        <img className="img-fluid image-about" src={myImage} alt="" />
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default AboutMe;