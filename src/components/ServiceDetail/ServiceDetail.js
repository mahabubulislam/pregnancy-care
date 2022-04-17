import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserDoctor } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const ServiceDetail = (props) => {
    const {img, name, description, price } = props?.service
    const navigate = useNavigate()
    return (

        <div className='p-5 flex  items-center'>
            <div>
                <h1 className='text-3xl text-rose-500 py-3'>{name}</h1>
                <p className='py-3'>{description}</p>
                <p className='text-xl'>Fee: {price}</p>
                <button onClick={() => navigate('/appoinment')} className='flex items-center justify-between outline outline-2 outline-rose-500 hover:bg-rose-500  text-rose-500 hover:text-white rounded-full my-3 p-3'>
                    <p className='mx-3'>Fix Appoinment </p>
                    <FontAwesomeIcon icon={faUserDoctor}></FontAwesomeIcon>
                </button>
            </div>
            <img src={img} alt="" />
        </div>
    );
};

export default ServiceDetail;