import React, { useEffect, useState } from 'react';
import useService from '../../hook/useService';
import Service from '../Service/Service';

const Services = () => {
   const [services] = useService()
    return (
        <div className='w-4/5 mx-auto my-5'>
            <h1 className='text-3xl my-5 text-rose-500 text-center'>Plan Table</h1>
            <div className='grid grid-cols-1 md:grid-cols-6 items-center justify-items-center'>
                {
                    services.map(service => <Service service={service} key={service.id}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;