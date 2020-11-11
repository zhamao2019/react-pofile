import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { faGithub, faLinkedin }from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faEnvelope,} from '@fortawesome/free-solid-svg-icons';
import '../css/style.css';

function Contact(){
    return(
        <Container className='bg-light pt-5 pb-5' fluid > 
        <Container>
            <h1 className='h1 mb-5'>Contact</h1>
            
            <Row className='align-items-center mb-3 pl-3'>
                <FontAwesomeIcon icon={faPhoneAlt} className='mr-3 text-primary'/>
                <p className='m-0'>873-288-0105</p>    
            </Row>
            <Row className='align-items-center mb-5 pl-3'>
                <FontAwesomeIcon icon={faEnvelope} className='mr-3 text-primary' />
                <p className='m-0'>yang0287@algonquinlive.com</p>
            </Row>
            <Row className='pl-3'>
                <a target='_blank' href='https://github.com/zhamao2019' className='mr-3'>
                    <FontAwesomeIcon icon={faGithub} size='lg'/>
                </a>
                <a target='_blank' href='https://www.linkedin.com/in/bing-yang-3613b0194/'>
                    <FontAwesomeIcon icon={faLinkedin} size='lg' />
                </a>
            </Row>
            </Container>
        </Container>
    );
}

export default Contact;