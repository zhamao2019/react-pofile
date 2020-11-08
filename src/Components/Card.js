import React from 'react';
import Card from 'react-bootstrap/Card';

function CardInfo(props){
    return (
        <div>
            <Card.Img variant="top" src={props.item.imgSrc} />
            <Card.Body>
                <Card.Title>{props.item.title}</Card.Title>
                <Card.Text>{props.item.description}</Card.Text>
                <Card.Link href={props.item.link}>View</Card.Link>
            </Card.Body>
        </div>
    );
}

export default CardInfo;