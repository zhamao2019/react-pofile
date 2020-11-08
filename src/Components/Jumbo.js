import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Jumbotron from 'react-bootstrap/Jumbotron';
import bgimg from '../img/bgimg.jpg';
import '../css/style.css';

function Jumbo(props){
    return(
        <Jumbotron className="jumbotron-fluid" style={{backgroundImage: `url(${bgimg})`, backgroundSize: 'cover'}}>
            <Container className="jumbo">
                <Row className="py-5 justify-content-center">
                    <Col>
                        {props.title && <h1 className="h1">{props.title}</h1>}
                        {props.subTitle && <p className="small">{props.subTitle}</p>}
                    </Col>
                </Row>
                
            </Container>
            
        </Jumbotron>
    );
}

export default Jumbo;