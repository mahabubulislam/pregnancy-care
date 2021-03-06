import { async } from '@firebase/util';
import React, { useEffect, useState } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import GoogleSignIn from '../GoogleSignIn/GoogleSignIn.js'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const [signInWithEmailAndPassword, user, loading, error,] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
    const [email, setEmail] = useState('')
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || "/";
    const handleSignIn = e => {
        e.preventDefault()
        setEmail(e.target.email.value)
        const password = e.target.password.value
        signInWithEmailAndPassword(email, password)
    }

    useEffect(() => {
        if (user) {
            navigate(from, { replace: true });
        }
    }, [user])

    const resetPassword = async () => {
        await (sendPasswordResetEmail(email))
        if (email) {
            toast('Password reset mail sent')
        }
        else {
            toast('Enter email first')
        }
    }
    return (
        <div className='w-1/2 mx-auto my-20 bg-rose-200 p-9 shadow-xl rounded-lg '>
            <form onSubmit={handleSignIn}>
                <h1 className='text-4xl text-rose-500 text-center my-5 font-bold underline underline-offset-8'> Login</h1>
                <label className="block w-1/2 mx-auto my-3">
                    <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                        Email
                    </span>
                    <input type="email" name="email" className="mt-1 px-3 py-2 w-full bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-rose-400 focus:ring-rose-400 block  rounded-full sm:text-sm focus:ring-1" placeholder="you@example.com" required />
                </label>
                <label className="block w-1/2 mx-auto my-3">
                    <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                        Password
                    </span>
                    <input type="password" name="password" className="mt-1 px-3 py-2 w-full bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-rose-400 focus:ring-rose-400 block  rounded-full sm:text-sm focus:ring-1" placeholder="password" required />
                </label>
                {

                    <p className='text-center text-red-600'>{ error?.message.slice(10)}</p>

                }
                <label className="block w-1/2 mx-auto my-3">
                    <input className='bg-rose-500  text-white rounded-full py-3 mt-1 px-3 w-full cursor-pointer   focus:outline-none' type="submit" value="Login" />
                </label>
            </form>
            <p className='text-center'>New to Pregnancy Care? <Link className='text-blue-700 cursor-pointer' to='/signup'>Register</Link></p>
            <p className='text-center'>Forgot Password? <span onClick={resetPassword} className='text-blue-700 cursor-pointer' >Reset Password</span></p>
            <GoogleSignIn></GoogleSignIn>
            <ToastContainer />
        </div>
    );
};

export default Login;