import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

function Footer(){
    return(
        <footer className="mt-5">
            <Container fluid>
                <Row className="justify-content-center p-3">
                    <Col className="p-0" sm={12}>
                    © Designed By Bing Yang
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;