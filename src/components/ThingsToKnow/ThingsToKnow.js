import React, { useEffect, useState } from 'react';
import Things from '../Things/Things';

const ThingsToKnow = () => {
    const [things, setThings] = useState([])
    useEffect(() => {
        fetch('things.json')
            .then(res => res.json())
            .then(data => setThings(data))
    }, [])
    return (
        <div className='my-10 w-4/5 mx-auto'>
            <h1 className='text-3xl text-center text-rose-500 my-5'>Things To Know</h1>
            <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 my-2'>
                {
                    things.map(thing => <Things
                        key={thing.id}
                        things={thing}
                    >
                    </Things>)
                }
            </div>
        </div>
    );
};

export default ThingsToKnow;