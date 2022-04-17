import React from 'react';
import useService from '../../hook/useService';
import ServiceDetail from '../ServiceDetail/ServiceDetail';

const AllServiceDetails = () => {
    const [services] = useService()
    return (
        <div className='w-4/5 mx-auto my-5'>
            <div className='grid grid-cols-1 gap-3 lg:grid-cols-3'>
                {
                    services.map(service => <ServiceDetail
                        key={service.id}
                        service={service}
                    ></ServiceDetail>)
                }
            </div>
        </div>
    );
};

export default AllServiceDetails;