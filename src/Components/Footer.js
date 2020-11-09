import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

function Footer(){
    return(
        <footer className="">
            <Container fluid className='bg-light text-muted '>
                <hr className='m-0'/>
                <Row className="justify-content-center pt-3">
                    <p className='small'>© Designed By Bing Yang</p>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;