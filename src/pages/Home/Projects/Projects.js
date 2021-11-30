import React, { useEffect, useState } from 'react';
import './Projects.css'

import Project3 from '../../../images/bicycle/screenbud-a5bb6b12-4299-4254-be2a-9471b5059471.png';
import Project4 from '../../../images/bicycle/screenbud-42c18208-d354-478b-960c-d96df8d431aa.png';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Project from '../Home/Project/Project';





const Projects = () => {
    const [service, setService] = useState([])
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/faiz8411/hot-oninon-site/main/projects.json')
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    return (
        <div id="projects" className="projects-cont">
            <h2 className="text-white">projects</h2>
            <hr />
            <Row xs={1} md={2} className="g-4">
                {service.map((pd, idx) => (
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={pd.image} />
                            <Card.Body>
                                <Card.Title>{pd.name}</Card.Title>
                                <Card.Text>
                                    <li>{pd.description01}</li>
                                    <li>{pd.description02}</li>
                                    <li>{pd.description03}</li>
                                    <li>{pd.description04}</li>
                                </Card.Text>
                                <Link to={`/details/${pd.id}`}> <button className="btn btn-success">explore more</button></Link>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>


        </div>
    );
};

export default Projects;