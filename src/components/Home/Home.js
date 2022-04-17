import React from 'react';
import Carousel from '../Carousel/Carousel';
import AllServiceDetails from '../AllServiceDetails/AllServiceDetails'
import Services from '../Services/Services';
import ThingsToKnow from '../ThingsToKnow/ThingsToKnow';

const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
            <ThingsToKnow></ThingsToKnow>
            <AllServiceDetails></AllServiceDetails>
        </div>
    );
};

export default Home;