import React from 'react';
import { Container } from 'react-bootstrap';
import Jumbo from './Jumbo';
import Skills from './Skills';

function HomePage(props){
    return(
        <Container fluid className='p-0'>
            <Jumbo title={props.title} name={props.name} subTitle={props.subTitle}/>
            <Skills />

        </Container>
    );
}

export default HomePage;