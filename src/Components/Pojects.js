import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Emoji from './Emoji';
import angular from '../img/Projects/angular-todo.png';
import CardInfo from './CardInfo';
import c01 from '../img/Projects/c-1.png';

class Projects extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            AngularItems: [
                {
                    id: 0,
                    title: 'Angular Todo List',
                    description: 'A todo list program using Angular, try to finish all your plans on the list!',
                    imgSrc: angular,
                    link: 'https://github.com/zhamao2019/Angular-ToDoList-Practice',
                    selected: false
                },
            ],
            CItems: [
                {
                    id: 0,
                    title: 'Student Courses Records System',
                    description: 'C# Asp.NET Application allows user to add student records into the database',
                    imgSrc: c01,
                    link: 'https://github.com/zhamao2019/C-_StudentCoursesRecordsSystem',
                    selected: false
                },
            ],
            PythonItems: [
                {
                    id: 0,
                    title: 'Student Countries Records',
                    description: 'Using Flask framework to built an application to show the student city and country on Google Map',
                    imgSrc: '',
                    link: '',
                    selected: false
                },
            ],
            GraphicDesignItems: [
                {
                    id: 0,
                    title: 'Typography Design',
                    description: 'A Tiktok style typography using Adobe Illustrator',
                    imgSrc: '',
                    link: '',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Illustrator avatar icon for Apple',
                    description: 'Designing an animal avatar with the skills of Adobe Illustrator',
                    imgSrc: '',
                    link: '',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Prototype Portfolio',
                    description: 'Prototype Design as worked in China',
                    imgSrc: '',
                    link: '',
                    selected: false
                }
            ]
        }
    }

    handleCardClick = (id, card) => {
        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false: true;
        
        items.forEach(item => {
            if(item.id !== id){
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }

    makeItems = (items) => {
        return items.map(item => {
            return <CardInfo item={item} onClick={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }

    render(){
        return(
            <Container className='p-0 mt-5'>
                <h2>Angular Project</h2>
                <Row className="">
                    {this.makeItems(this.state.AngularItems)}
                </Row>
                <h2>C# ASP.NET Projects</h2>
                <Row>
                    {this.makeItems(this.state.CItems)}
                </Row>
                <h2>Python Projects</h2>
                <Row>
                    {this.makeItems(this.state.PythonItems)}
                </Row>
                <h2>Interaction and Graphic Design</h2>
                {/* <Row>
                    <Emoji />
                </Row> */}
                <Row>
                    {this.makeItems(this.state.GraphicDesignItems)}
                </Row>
            </Container>
        );
    }
    
}

export default Projects;