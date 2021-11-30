import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Project = () => {
    return (
        <div>
            {/* <Row xs={1} md={2} className="g-4">
                {Project.map((pd, idx) => (
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
                                <Link to="details"> <button className="btn btn-success">explore more</button></Link>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row> */}
        </div>
    );
};

export default Project;