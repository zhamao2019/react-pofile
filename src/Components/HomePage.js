import React from 'react';
import Jumbo from './Jumbo';

function HomePage(props){
    return(
        <Jumbo title={props.title} name={props.name} subTitle={props.subTitle}/>
    );
}

export default HomePage;