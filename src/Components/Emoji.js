import React from 'react';
import { Row } from 'react-bootstrap';

class Emoji extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [
                {
                    imgSrc: '',
                }
            ]
        }
    }

    showImages = (img) => {
        const images = require('../img/emoji/'+img);

    }

    render(){
        return (
            <div>
                <Row>
                    
                </Row>
            </div>
        );
    }
    
}

export default Emoji;