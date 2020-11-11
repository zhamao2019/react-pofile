import React from 'react';
import { Container } from 'react-bootstrap';
import Jumbo from '../Components/Jumbo';
import Projects from '../Components/Pojects';

function PortfolioPage(props){
    return(
        <Container fluid className='p-0'>
            <Jumbo title={props.title} name={props.name} subTitle={props.subTitle}/>
            <Projects/>

        </Container>
    );
}

export default PortfolioPage;