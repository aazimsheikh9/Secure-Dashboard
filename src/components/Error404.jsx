import React from 'react'
import { Link } from 'react-router-dom'

const Error404 = () => {
    return (
        <>
            <div className="h-screen flex flex-col justify-center items-center space-y-3 bg-gray-100">
                <h1 className='text-red-600 font-bold lg:text-3xl text-2xl text-center'>⚠️ Oh No! You are on the 404 page! ⚠️</h1>
                <p className="text-gray-600 font-semibold text-xl text-center">Please go to <Link className='text-blue-700 hover:underline' to={'/'}>homepage</Link></p>
            </div>
        </>
    )
}

export default Error404