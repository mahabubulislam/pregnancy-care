import React from 'react';

const Things = ({ things }) => {
    const { name, img } = things
    return (
        <div className='border-2 even:border-rose-500 rounded-lg odd:border-blue-600'>
            <div
                className='h-80 rounded-lg bg-cover bg-no-repeat relative'
                style={{
                    backgroundImage: `url(${img})`
                }}>
                <div className=' bottom-0 absolute bg-slate-300/60 p-12 w-full rounded-t-[70px] '>
                    <h3 className='text-4xl'>{name}</h3>
                </div>

            </div>
        </div>
    );
};

export default Things;