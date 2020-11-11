import React from 'react';
import Card from 'react-bootstrap/Card';
import '../css/style.css';

function CardInfo(props){
    return (
        <div>
            <Card border="text-muted" className='card'>
                <Card.Img variant="top" src={props.item.imgSrc} />
                <Card.Body>
                    <Card.Title>{props.item.title}</Card.Title>
                    <Card.Text>{props.item.description}</Card.Text>
                    <Card.Link href={props.item.link}>View</Card.Link>
                </Card.Body>
            </Card>
        </div>
    );
}

export default CardInfo;