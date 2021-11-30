import React, { useEffect, useState } from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import { useParams } from 'react-router';

const Details = () => {
    const [detail, setDetails] = useState({})
    const { projectId } = useParams()
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/faiz8411/hot-oninon-site/main/projects.json')
            .then(res => res.json())
            .then(data => {
                const details = data.find(pd => pd.id == projectId)
                setDetails(details)
            })
    }, [projectId])
    console.log(detail)
    // console.log(describe)
    return (
        <div>
            <CardGroup>
                <Card>
                    <Card.Img variant="top" src={detail.image} />

                    <Card.Body>
                        <Card.Title>{detail.name}</Card.Title>
                        <Card.Text>
                            <li> {detail.description01}</li>
                            <li> {detail.description02}</li>


                        </Card.Text>
                    </Card.Body>

                </Card>
                <Card>
                    <Card.Img variant="top" src={detail.imageD} />
                    <Card.Body>

                        <Card.Text>
                            <li> {detail.description03}</li>
                            <li> {detail.description04}</li>
                        </Card.Text>
                    </Card.Body>

                </Card>
                <Card>
                    <Card.Img variant="top" src={detail.imageC} />
                    <Card.Body>

                        <Card.Text>
                            <li> {detail.description05}</li>
                            <li> {detail.description06}</li>
                            <li> {detail.description07}</li>
                        </Card.Text>
                    </Card.Body>

                </Card>
            </CardGroup>
        </div>
    );
};

export default Details;