import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
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