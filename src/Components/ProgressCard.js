import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Media, ProgressBar, Row } from 'react-bootstrap';
import '../css/style.css';

function ProgressCard(props){
    return (
            
            <Media className='media mb-3 mr-5'>
                <img></img>
                <FontAwesomeIcon className='media-icon mr-3' icon={props.item.imgSrc}></FontAwesomeIcon>
                
                <Media.Body>
                    <p className='media-title'>{props.item.title}</p>
                    <p className='mb-3'>{props.item.description}</p>
                    <ProgressBar variant='warning' now={props.item.percent} label={`${props.item.percent}%`} ></ProgressBar>
                </Media.Body>
            </Media>
        
    );
}

export default ProgressCard;