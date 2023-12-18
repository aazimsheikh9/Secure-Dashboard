import React from 'react'
import { Link } from 'react-router-dom'

const DashboardContent = () => {
    return (
        <>
            <div className="h-[70vh] flex flex-col justify-center items-center space-y-3">
                <h1 className="text-2xl text-gray-800 font-semibold text-center">
                    Woho! You made it to the secure dashboard.
                </h1>
                <p className="font-bold text-center">
                    🎁
                    <span
                        className='text-xl text-transparent bg-clip-text bg-gradient-to-l from-orange-600 to-yellow-500'
                    >
                        {" "}Here's a small gift for you...{" "}
                    </span>
                    🎁
                </p>

                <div className="flex space-x-3 animate-bounce mt-5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#191919" className="w-6 h-6 mt-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#191919" className="w-6 h-6 mt-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#191919" className="w-6 h-6 mt-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
                    </svg>
                </div>
                <Link
                    className='text-xl text-[#191919] font-medium relative inline-block smooth-underline-link'
                    target='_blank'
                    to={"https://github.com/aazimsheikh9/Secure-Dashboard"}
                >
                    My Github Repo
                </Link>
            </div>
        </>
    )
}

export default DashboardContent