import React from 'react';
import { Container } from 'react-bootstrap';

class Skills extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'HTML + CSS + SASS',
                    description: 'Excellent in HTML + CSS skill and associate with Sass style sheets',
                    imgSrc: '',
                    percent: '90',
                },
                {
                    id: 1,
                    title: 'JavaScript & Typescript',
                    description: 'Proficient in JavaScript and Typescript',
                    imgSrc: '',
                    percent: '70',
                },
                {
                    id: 2,
                    title: 'C# ASP.NET & MVC',
                    description: 'Building simple project with C#, ASP.NET and MVC ',
                    imgSrc: '',
                    percent: '70',
                },
                {
                    id: 3,
                    title: 'PHP',
                    description: '',
                    imgSrc: '',
                    percent: '70',
                },
                {
                    id: 4,
                    title: 'Graphic & Prototype Design',
                    description: 'UX prototyping with Photoshop + Illustrator + Sketch',
                    imgSrc: '',
                    percent: '80',
                },
                {
                    id: 5,
                    title: 'GitHub',
                    description: 'Coding and version management with GitHub',
                    imgSrc: '',
                    percent: '80',
                },
                {
                    id: 6,
                    title: 'SQL',
                    description: 'Access and manipulate databases with SQL',
                    imgSrc: '',
                    percent: '80',
                },
                {
                    id: 7,
                    title: 'React',
                    description: 'Front-end development with React',
                    imgSrc: '',
                    percent: '50',
                },
                {
                    id: 8,
                    title: 'Angular',
                    description: 'Front-end development with Angular',
                    imgSrc: '',
                    percent: '50',
                },
            ]
        }
    }

    render() {
        return(
            <Container>
               <h1>Skills</h1>
               
            </Container>
        );
    }
    
}

export default Skills;