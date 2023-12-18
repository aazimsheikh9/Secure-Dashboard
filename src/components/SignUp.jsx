import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [message, setMessage] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem('user-info')) {
            navigate("/dashboard");
        }
    }, []);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword); // Toggle show/hide password state
    };

    // Sign Up API from Reqres.in is limited to particular user email i.e eve.holt@reqres.in
    async function registerUser(data) {
        // console.log(data);

        let result = await fetch('https://reqres.in/api/register', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
        });

        const statusCode = result?.status;

        result = await result.json();
        // console.log(result);

        if (result && result.hasOwnProperty('token')) {
            localStorage.setItem('user-info', JSON.stringify(result));
        } else {
            console.error('Invalid or empty user data received.');
        }

        if (statusCode === 200) {
            navigate("/dashboard");
        } else {
            setMessage(
                <div className='text-center font-medium'>Registration Failed!</div>
            );
        }
    }

    return (
        <div className='flex flex-col items-center justify-center bg-gray-100 h-screen'>
            <h1 className='text-2xl lg:text-3xl mt-12 font-bold text-gray-800'>
                Welcome To Sign Up Page
            </h1>

            <form onSubmit={handleSubmit(registerUser)} className='flex flex-col mt-4 w-3/4 lg:w-1/3'>
                <input
                    className='border rounded-md p-2 mt-2'
                    placeholder='Enter Email'
                    type='email'
                    {...register('email', { required: 'Email is required' })}
                />
                {errors.email && <p className='text-red-500'>{errors.email.message}</p>}

                <div className='relative'>
                    <input
                        className='border rounded-md p-2 mt-2 pr-10 w-full' // Added paddingRight for the icon
                        placeholder='Enter Password'
                        type={showPassword ? 'text' : 'password'} // Toggle between text and password type
                        {...register('password', { required: 'Password is required' })}
                    />
                    <span
                        className='absolute top-1/2 right-3 mt-1 transform -translate-y-1/2 cursor-pointer'
                        onClick={togglePasswordVisibility}
                    >
                        {showPassword ? (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            </svg>

                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                            </svg>

                        )}
                    </span>
                </div>
                {errors.password && <p className='text-red-500'>{errors.password.message}</p>}

                <button
                    className='bg-blue-500 hover:bg-blue-600 duration-200 text-white font-bold py-2 px-4 rounded mt-4 cursor-pointer'
                    type='submit'
                >
                    Sign Up
                </button>

                {/* Display message */}
                {message && <p className='mt-4 text-red-500'>{message}</p>}
            </form>

            <h1 className='mt-12 font-medium text-gray-800'>
                Do you want to login?{' '}
                <Link className='text-blue-600 hover:underline' to='/login'>
                    Let's Go
                </Link>
            </h1>
        </div>
    );
};

export default SignUp;
