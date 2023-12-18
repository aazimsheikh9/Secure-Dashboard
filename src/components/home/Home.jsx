import React, { useEffect } from 'react'
import Button from './Button'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem('user-info')) {
            navigate("/dashboard");
        }
    }, []);

    return (
        <>
            <div className="flex flex-col h-screen justify-center items-center bg-gray-100">
                <h1 className="text-3xl font-bold mb-10 text-gray-800 text-center">Welcome to Secure Dashboard</h1>
                <Button to="/signup" text="Sign Up" />
                <Button to="/login" text="Login" />
            </div>
        </>
    )
}

export default Home