import React from 'react';
import './Service.css'
const Service = ({ service }) => {
    const { name, img } = service
    return (

        <div className='service'>
            <img src={img} alt="" />
            <h3 className='text-xl'>{name}</h3>
        </div>

    );
};

export default Service;