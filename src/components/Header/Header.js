import React, { useState } from 'react';
import logo from '../../images/logo/pregnant.png'
import { MenuIcon, XIcon } from '@heroicons/react/solid'
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    const [open, setOpen] = useState(false)
    return (


        <nav className='shadow-md w-full sticky top-0 left-0 z-[900]'>
            <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
                <div className='font-bold text-2xl cursor-pointer flex items-center text-gray-800'>
                    <div className='flex items-center'>
                        <img className='w-32' src={logo} alt="" />
                        <h1 className='m-0 text-3xl text-rose-400'>PREGNANCY CARE</h1>
                    </div>
                </div>
                <div onClick={() => setOpen(!open)} className='w-6 h-6 text-3xl absolute right-8 top-6 cursor-pointer xl:hidden'>
                    {open ? <XIcon></XIcon> : <MenuIcon></MenuIcon>}
                </div>
                <ul className={`xl:flex xl:items-center xl:pb-0 pb-12 absolute xl:static bg-white xl:z-auto z-[-1] left-0 w-full xl:w-auto mt-5 xl:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ' : 'top-[-490px]'}`}>
                    <CustomLink to='/home'>Home</CustomLink>
                    <CustomLink to='/procedures'>Procedures</CustomLink>
                    <CustomLink to='/appoinment'>Appoinment</CustomLink>
                    <CustomLink to='/blogs'>Blogs</CustomLink>
                    <CustomLink to='/login'>Login / Register</CustomLink>
                </ul>
            </div>
        </nav>


    );
};

export default Header;