import { useState } from 'react';
import Header from './Header';

const Login = () => {
    const [isSignForm, setIsSignInForm] = useState(false);
    const toggleSignInForm = () => {
        setIsSignInForm(!isSignForm)
    }

    return (
        <div>
            <Header />
            <div className='absolute my-[15%] mx-[40%] bg-black  p-4 text-white bg-opacity-80'>
                <form >
                    <div>{isSignForm ? "Sign In" : "Sign Up"}</div>
                    {!isSignForm && <input className='p-3 m-2 w-11/12 bg-black border-color-red-100' type='text' placeholder='Full Name' />}
                    <input className='p-3 m-2 w-11/12 bg-black border-color-red-100' type='text' placeholder='Email Address' />
                    <input className='p-3 m-2 w-11/12 bg-black' type='password' placeholder='Password' />
                    <button className='p-3 m-2 bg-red-700 w-11/12 rounded-lg'>Sign In</button>
                </form>
                <p className='p-4 text-sm cursor-pointer' onClick={toggleSignInForm}>
                    {isSignForm ? "New to Netflix? Sign Up Now" : "Already Registered? Sign In Now"}
                </p>
            </div>
            <img src='https://assets.nflxext.com/ffe/siteui/vlv3/9f46b569-aff7-4975-9b8e-3212e4637f16/c89f232d-3b67-43b0-8109-921534917808/CA-en-20240415-popsignuptwoweeks-perspective_alpha_website_large.jpg' alt='bg' />

        </div>
    )
}

export default Login;