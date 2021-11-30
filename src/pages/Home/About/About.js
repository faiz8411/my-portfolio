import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import my from '../../../images/my/faiz39.jpg'
import resume from '../../../images/resume/resume of FAIZ ULLAH (1).pdf'
import './About.css'

const About = () => {
    return (
        <div className="about-container">
            {/* <h4 className="text-warning">About</h4> */}
            <Row>
                <Col xs={12} md={6}>
                    <img className="img-fluid image-about" src={my} alt="" />
                </Col>
                <Col xs={12} md={6}>
                    <h2 className="text-white me-5 about mt-5">About Me</h2>
                    <p className="m-3 paragraph">Hi! I am Faiz Ullah. Since you are looking for a react developer I believe I can do it. I have 1-year of experience efficiently coding websites. I have designed, developed, lunched, and customized, highly responsive websites using advanced technologies. designed and developed front-end for 5+ webpages using react js.
                        developed 3 full-stack websites using react js,Node js,Express js,Mongodb,Heroku,Firebase.</p>
                    <a href="https://drive.google.com/uc?export=download&id=1FxedPr60098cpGu-8enAJADxLeEXb6ix"><button className="resume-button mx-2" >Download Resume</button></a>  <a href=""><button className="resume-button">Hire Me</button></a>
                </Col>
            </Row>
        </div>
    );
};

export default About;