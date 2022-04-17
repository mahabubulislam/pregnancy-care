import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate()
    return (
        <div className='w-3/4 mx-auto my-24'>
            <h1 className='text-center text-5xl'>Page Not Found</h1>
            <img className=' mx-auto' src='https://cdn.pixabay.com/photo/2017/03/09/12/31/error-2129569_960_720.jpg' alt="" />
            <div className='mx-auto w-1/6'>
                <button onClick={()=>navigate('/')} className='rounded-full  md:text-2xl p-2 my-3 bg-rose-500'>Go to Home</button>
            </div>
        </div>
    );
};

export default NotFound;