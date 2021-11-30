import React from 'react';
import './AboutMe.css'
import myImage from '../../../../images/my/62454129_2280578168863570_7336807789525729280_n.jpg'
import { Col, Row } from 'react-bootstrap';

const AboutMe = () => {
    return (

        <div>
            <div className="about-container">

                <Row>
                    <Col xs={12} md={6} className="mt-5">
                        <h6 className="world" >WELCOME TO MY WORLD</h6>
                        <h2 className="jon">HI,I AM FAIZ ULLAH</h2>
                        <h3 className="REACT">REACT DEVELOPER</h3>
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