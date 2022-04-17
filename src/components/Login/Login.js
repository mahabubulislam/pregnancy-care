import React from 'react';

const Login = () => {
    return (
        <div className='w-1/2 mx-auto my-20 bg-rose-200 p-9 shadow-xl rounded-lg '>
            <form>
                <h1 className='text-4xl text-rose-400 text-center my-5 font-bold underline underline-offset-8'> Login</h1>
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
                <label className="block w-1/2 mx-auto my-3">
                <input className='bg-rose-400 hover:bg-emerald-400 text-white rounded-full py-3 mt-1 px-3 w-full cursor-pointer   focus:outline-none'  type="submit" value="Login" />
                </label>
               
            </form>
        </div>
    );
};

export default Login;