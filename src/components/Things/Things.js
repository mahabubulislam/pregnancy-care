import React from 'react';

const Things = ({ things }) => {
    const { name, img } = things
    return (
        <div className='border-2 even:border-rose-500 rounded-lg odd:border-blue-600 cursor-pointer'>
            <div className="text-center relative">
                <img className='w-full h-72' src={img} alt='...'/>
                <h1 className='absolute bottom-0 left-auto text-2xl bg-slate-200/70 w-full p-10 font-bold rounded-t-3xl hover:scale-105 ease-in duration-500'>{name}</h1>
            </div>
        </div>
    );
};

export default Things;