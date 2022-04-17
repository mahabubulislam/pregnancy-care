import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo/pregnant.png'
const Footer = () => {
    const date = new Date()
    const year = date.getFullYear()
    return (
        <div className=' bg-rose-100 '>
            <div className='flex justify-evenly p-9'>
                <div className='w-96'>
                    <div className='flex items-center my-3'>
                        <img className='w-32' src={logo} alt="" />
                        <h1 className='text-xl text-rose-500'>PREGNANCY CARE</h1>
                    </div>
                    <div className=' ml-7 my-5'>
                        <p>An obstetrician is a doctor who specializes in pregnancy, childbirth, and a woman's reproductive system. Although other doctors can deliver. </p>
                        <h5 className='text-xl font-bold' >Trusted by 3000+ people</h5>
                    </div>
                </div>
                <div className='mt-7'>
                    <Link className='block hover:text-rose-500' to='/home'>Home</Link>
                    <Link className='block hover:text-rose-500' to='/appoinment'>Services</Link>
                    <Link className='block hover:text-rose-500' to='/'>Contact</Link>
                    <Link className='block hover:text-rose-500' to='/about'>About</Link>
                </div>
                <div className='mt-7'>
                    <Link className='block hover:text-rose-500' to='/'>Pregnancy Care</Link>
                    <Link className='block hover:text-rose-500' to='/'>Maternal Care</Link>
                    <Link className='block hover:text-rose-500' to='/'>NICU Facilities</Link>
                  
                </div>
                <div className='mt-7'>
                    <p>Contact us</p>
                    <p>+880123644</p>
                    <p>Tangai, Dhaka, Bangladesh</p>
                </div>
            </div>
            <div className='bg-emerald-500 p-10 flex justify-around '>
                <p>&copy; Copy right Pregnancy care {year} </p>
                <div>
                    <p className='hover:text-rose-500 cursor-pointer ml-2'>Terms and Services</p>
                    <p className='hover:text-rose-500 cursor-pointer ml-2'>Privacy Policy</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;