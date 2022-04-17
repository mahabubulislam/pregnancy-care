import React, { useEffect } from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const GoogleSignIn = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate()
    useEffect(() => {
        if (user) {
            navigate('/')
        }
    }, [user])
    return (
        <div onClick={()=>signInWithGoogle()} className="border-2 bg-rose-500 flex justify-evenly items-center text-white  rounded-full py-3 mt-1 px-3 w-1/2 mx-auto text-center cursor-pointer  ">
            <button>Continue with Google</button>
            <img className='rounded-full w-4 h-4' src="https://i.ibb.co/CBBMdP3/rsz-google.png" alt="" />
        </div>
    );
};

export default GoogleSignIn;