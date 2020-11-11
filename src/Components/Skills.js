import React from 'react';
import { Container, Row } from 'react-bootstrap';

import { faHtml5, faJs, faAngular, faGithub, faPhp, faReact }from '@fortawesome/free-brands-svg-icons';
import { faLaptopCode, faDatabase, faPalette } from '@fortawesome/free-solid-svg-icons';
import ProgressCard from './ProgressCard';

class Skills extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'HTML + CSS + SASS',
                    description: 'Excellent in HTML, CSS front-end skill',
                    imgSrc: faHtml5,
                    percent: 90,
                },
                {
                    id: 1,
                    title: 'JavaScript & Typescript',
                    description: 'Proficient in JavaScript and Typescript',
                    imgSrc: faJs,
                    percent: '70',
                },
                {
                    id: 2,
                    title: 'C# ASP.NET & MVC',
                    description: 'Building simple project with C#, ASP.NET and MVC ',
                    imgSrc: faLaptopCode,
                    percent: 70,
                },
                {
                    id: 3,
                    title: 'PHP',
                    description: 'Strong PHP skill in web development',
                    imgSrc: faPhp,
                    percent: 70,
                },
                {
                    id: 4,
                    title: 'Graphic & Prototype Design',
                    description: 'UX prototyping with Photoshop + Illustrator + Sketch',
                    imgSrc: faPalette,
                    percent: '80',
                },
                {
                    id: 5,
                    title: 'GitHub',
                    description: 'Coding and version management with GitHub',
                    imgSrc: faGithub,
                    percent: '80',
                },
                {
                    id: 6,
                    title: 'SQL',
                    description: 'Access and manipulate databases with SQL',
                    imgSrc: faDatabase,
                    percent: '80',
                },
                {
                    id: 7,
                    title: 'React',
                    description: 'Front-end development with React',
                    imgSrc: faReact,
                    percent: '50',
                },
                {
                    id: 8,
                    title: 'Angular',
                    description: 'Front-end development with Angular',
                    imgSrc: faAngular,
                    percent: '50',
                },
            ]
        }
        
    }

    makeItems = (items) => {
        return items.map(item => {
            return <ProgressCard item={item} key={item.id} />
        })
    }

    render() {
       
        return(
            <Container className='mt-5'>
               <h1 className='h1 mb-5'>Skills</h1>
               <Row className='pl-3'>
               
                {this.makeItems(this.state.items)}
               </Row>
         
               
            </Container>
        );
    }
    
}

export default Skills;