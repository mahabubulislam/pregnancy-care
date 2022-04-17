import React from 'react';

const Service = ({ service }) => {
    const { name, img } = service
    return (

        <div className='text-center cursor-pointer border-x-2 '>
            <img className='mx-auto' src={img} alt="" />
            <h3 className='text-xl'>{name}</h3>
        </div>

    );
};

export default Service;