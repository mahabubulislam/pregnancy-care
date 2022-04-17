import React from 'react';

const Appoinment = () => {
    return (
        <div className='flex flex-col-reverse md:flex-row justify-between bg-blue-100'>
            <div className='text-center w-1/2 mx-auto'>
                <h1 className='text-4xl m-4 p-2 text-rose-500'>Fix an Appoinment</h1>
                <form className='mb-5'>
                    <input className='bg-white rounded-full p-4 my-2 w-1/2 focus:outline-none' type="text" required placeholder='Name' />
                    <br />
                    <input className='bg-white rounded-full p-4 my-2 w-1/2 focus:outline-none' type="email" name="email" id="email" readOnly />
                    <br />
                    <input className='bg-white rounded-full p-4 my-2 w-1/2 focus:outline-none' type="text" name="phone" id="phone" placeholder='Phone' required/>
                    <br />
                    <select className='bg-white rounded-full p-4 my-2 w-1/2' name="services" id="services" >
                        <option value="Type of Services">Type of Services</option>
                        <option value="Monthly Checkup">Monthly Checkup</option>
                        <option value="Getting Pregnant">Getting Pregnant</option>
                        <option value="Baby Care">Baby Care</option>
                        <option value="Pregnancy">Pregnancy</option>
                        <option value="Fedding Baby">Fedding Baby</option>
                        <option value="Baby Birth">Baby Birth</option>
                    </select>
                    <br />
                    <input className='bg-white rounded-full p-4 my-2 mdw-1/2 focus:outline-none' type="date" name="date" id="date" placeholder='Available on' required />
                    <br />
                    <input className='bg-white rounded-full p-4 my-2 mx-7 focus:outline-none' type="time" name="time" id="time" min="09:00" max="18:00" required  />
                    <input className='bg-white rounded-full p-4 my-2 mx-7 focus:outline-none' type="time" name="time" id="time" min="09:00" max="18:00" required  />
                    <br />
                    <input className='bg-rose-500 text-white rounded-full p-4 my-2 w-1/2 focus:outline-none cursor-pointer'  type="submit" value="Check Avaibility" />
                </form>
            </div>
            <img className='w-2/4' src="https://i.ibb.co/Wn0CZwX/doctor-1.png" alt="" />
        </div>
    );
};

export default Appoinment;