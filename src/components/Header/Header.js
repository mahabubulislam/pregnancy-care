import React, { useState } from 'react';
import logo from '../../images/logo/pregnant.png'
import { MenuIcon, XIcon } from '@heroicons/react/solid'
import CustomLink from '../CustomLink/CustomLink';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
const Header = () => {
    const [open, setOpen] = useState(false)
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate()
    return (


        <nav className='shadow-md w-full sticky top-0 left-0 z-[900]'>
            <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
                <div className='font-bold text-2xl cursor-pointer flex items-center text-gray-800'>
                    <div className='flex items-center'>
                        <img className='w-32' src={logo} alt="" />
                        <h1 className='m-0 text-3xl text-rose-500'>PREGNANCY CARE</h1>
                    </div>
                </div>
                <div onClick={() => setOpen(!open)} className='w-6 h-6 text-3lg absolute right-8 top-6 cursor-pointer lg:hidden'>
                    {open ? <XIcon></XIcon> : <MenuIcon></MenuIcon>}
                </div>
                <ul className={`lg:flex lg:items-center lg:pb-0 pb-12 absolute lg:static bg-white lg:z-auto z-[-1] left-0 w-full lg:w-auto mt-5 lg:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ' : 'top-[-490px]'}`}>
                    <CustomLink to='/home'>Home</CustomLink>
                    <CustomLink to='/appoinment'>Appoinment</CustomLink>
                    <CustomLink to='/blogs'>Blogs</CustomLink>
                    <CustomLink to='/about'>About</CustomLink>
                    {
                        user?
                        <button onClick={()=>signOut(auth)} className='bg-rose-500 p-2 md:ml-8 text-xl md:my-0 my-4 py-1 text-white rounded-lg'>Logout</button>
                        :
                        <button onClick={()=>navigate('/login')}  className='bg-rose-500 p-2 md:ml-8 text-xl md:my-0 my-4 py-1 text-white rounded-lg'>Login</button>
                        
                        
                    }
                </ul>
            </div>
        </nav>


    );
};

export default Header;