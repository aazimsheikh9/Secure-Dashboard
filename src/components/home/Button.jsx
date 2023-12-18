import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ to, text }) => {
    return (
        <Link to={to} className='lg:w-1/4 w-1/2'>
            <button className="bg-blue-500 hover:bg-blue-600 duration-200 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:border-blue-300 m-2 w-full">
                {text}
            </button>
        </Link>
    );
};

export default Button;