import React from 'react';
import Carousel from '../Carousel/Carousel';
import Services from '../Services/Services';
import ThingsToKnow from '../ThingsToKnow/ThingsToKnow';

const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
            <ThingsToKnow></ThingsToKnow>
            <Services></Services>
        </div>
    );
};

export default Home;