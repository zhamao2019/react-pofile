import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Card from '../Components/Card';
import Emoji from '../Components/Emoji';
import angular from '../img/Projects/angular-todo.png';

class PortfolioPage extends React.Component {
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
                    imgSrc: '',
                    link: '',
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
            return <Card item={item} onClick={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }

    render(){
        return(
            <Container className='p-0 mt-5'>
                <h1>Angular Project</h1>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.AngularItems)}
                </Row>
                <h1>C# ASP.NET Projects</h1>
                <Row>
                    {this.makeItems(this.state.CItems)}
                </Row>
                <h1>Python Projects</h1>
                <Row>
                    {this.makeItems(this.state.PythonItems)}
                </Row>
                <h1>Interaction and Graphic Design</h1>
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

export default PortfolioPage;