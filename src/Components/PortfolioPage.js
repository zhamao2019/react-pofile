import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Card from '../Components/Card';

class PortfolioPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Angular Todo List',
                    description: 'A todo list program using Angular, try to finish all your plans on the list!',
                    imgSrc: '',
                    link: '',
                    selected: false
                },
            ],
            // CItems: [
            //     {
            //         id: 0,
            //         title: 'Student Courses Records System',
            //         description: 'C# Asp.NET Application allows user to add student records into the database',
            //         imgSrc: '',
            //         link: '',
            //         selected: false
            //     },
            // ],
            // PythonItems: [
            //     {
            //         id: 0,
            //         title: 'Student Countries Records',
            //         description: 'Using Flask framework to built an application to show the student city and country on Google Map',
            //         imgSrc: '',
            //         link: '',
            //         selected: false
            //     },
            // ],
            // GraphicDesignItems: [
            //     {
            //         id: 0,
            //         title: 'Typography Design',
            //         description: 'A Tiktok style typography using Adobe Illustrator',
            //         imgSrc: '',
            //         link: '',
            //         selected: false
            //     },
            //     {
            //         id: 1,
            //         title: 'Illustrator avatar icon for Apple',
            //         description: 'Designing an animal avatar with the skills of Adobe Illustrator',
            //         imgSrc: '',
            //         link: '',
            //         selected: false
            //     },
            //     {
            //         id: 2,
            //         title: 'Prototype Portfolio',
            //         description: 'Prototype Design as worked in China',
            //         imgSrc: '',
            //         link: '',
            //         selected: false
            //     }
            // ]
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
            <Container fluid>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }
    
}

export default PortfolioPage;