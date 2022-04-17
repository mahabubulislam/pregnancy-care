import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

const Service = (props) => {
    const {id, name, img } = props?.service
    const navigate = useNavigate()
    return (
        <>
            <div onClick={()=>navigate('/service')} className='text-center cursor-pointer border-x-2 '>
                <img className='mx-auto' src={img} alt="" />
                <h3 className='text-xl'>{name}</h3>
            </div>
            <Outlet/>
        </>

    );
};

export default Service;