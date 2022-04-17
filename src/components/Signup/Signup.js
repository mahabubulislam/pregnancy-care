import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {  useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Signup = () => {
   
    const [ createUserWithEmailAndPassword,user, loading, error, ] = useCreateUserWithEmailAndPassword(auth,{option:'sendEmailVerification'});
    const navigate = useNavigate()
    const handleRegister = e =>{
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        const confirmPassword = e.target.confirmPassword.value
        if(password===confirmPassword){
            createUserWithEmailAndPassword(email,password)
            navigate('/')
        }
        alert("Password don't match")
    }

    return (
        <div className='w-1/2 mx-auto my-20 bg-rose-200 p-9 shadow-xl rounded-lg '>
            <form onSubmit={handleRegister}>
                <h1 className='text-4xl text-rose-500 text-center my-5 font-bold underline underline-offset-8'>Register</h1>
                <label className="block w-1/2 mx-auto my-3">
                    <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                        Name
                    </span>
                    <input type="text" name="name" className="mt-1 px-3 py-2 w-full bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-rose-400 focus:ring-rose-400 block  rounded-full sm:text-sm focus:ring-1" placeholder="your name" required />
                </label>
                <label className="block w-1/2 mx-auto my-3">
                    <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                        Email
                    </span>
                    <input type="email" name="email" className="mt-1 px-3 py-2 w-full bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-rose-400 focus:ring-rose-400 block  rounded-full sm:text-sm focus:ring-1" placeholder="you@example.com" required />
                </label>
                <label className="block w-1/2 mx-auto my-3">
                    <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                        Date of Birth
                    </span>
                    <input type="date" name="date" className="mt-1 px-3 py-2 w-full bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-rose-400 focus:ring-rose-400 block  rounded-full sm:text-sm focus:ring-1" required />
                </label>
                <label className="block w-1/2 mx-auto my-3">
                    <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                        Weight
                    </span>
                    <input type="text" name="weight" className="mt-1 px-3 py-2 w-full bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-rose-400 focus:ring-rose-400 block  rounded-full sm:text-sm focus:ring-1" required />
                </label>
                <label className="block w-1/2 mx-auto my-3">
                    <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                        Blood Group
                    </span>
                    <select className="mt-1 px-3 py-2 w-full bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-rose-400 focus:ring-rose-400 block  rounded-full sm:text-sm focus:ring-1" required name="services" id="services" >
                        <option value="o+">O Positive</option>
                        <option value="o-">O Negative</option>
                        <option value="a+">A Positive</option>
                        <option value="a-">A Negative</option>
                        <option value="b+">B Positive</option>
                        <option value="b-">B Negative</option>
                        <option value="ab+">AB Positive</option>
                        <option value="ab-">AB Negative</option>
                    </select>
                </label>

                {<label className="block w-1/2 mx-auto my-3">
                    <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                        Password
                    </span>
                    <input type="password" name="password" className="mt-1 px-3 py-2 w-full bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-rose-400 focus:ring-rose-400 block  rounded-full sm:text-sm focus:ring-1" placeholder="password" required />
                </label>}
                {<label className="block w-1/2 mx-auto my-3">
                    <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                        Confirm Password
                    </span>
                    <input type="password" name="confirmPassword" className="mt-1 px-3 py-2 w-full bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-rose-400 focus:ring-rose-400 block  rounded-full sm:text-sm focus:ring-1" placeholder="retype password" required />
                </label>}
                <label className="block w-1/2 mx-auto my-3">
                    <input className='bg-rose-500  text-white rounded-full py-3 mt-1 px-3 w-full cursor-pointer   focus:outline-none' type="submit" value="Register" />
                </label>
            </form>
            <p className='text-center'>Already have an account? <Link className='text-blue-700 cursor-pointer' to='/login'>Login</Link></p>
            
        </div>
    );
};

export default Signup;