import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    function logout() {
        localStorage.clear();
        navigate('/');
        setShowModal(false);
    }

    return (
        <>
            {
                localStorage.getItem("user-info") ?
                    <>
                        <nav className="bg-gray-800 p-4">
                            <div className="max-w-7xl mx-auto flex items-center justify-between">
                                <div className="flex items-center">
                                    <h1 className="text-gray-200 text-xl">Welcome to Dashboard</h1>
                                </div>

                                {/* Hamburger menu for mobile */}
                                <div className="block lg:hidden absolute right-5">
                                    <button
                                        onClick={toggleNavbar}
                                        className="text-gray-200 focus:ring duration-200"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-7 h-7">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                        </svg>
                                    </button>
                                </div>

                                {/* Navbar links */}
                                <div className={`lg:flex ${isOpen ? 'block' : 'hidden'} lg:relative mt-4 lg:mt-0`}>
                                    <ul className="lg:flex lg:space-x-4">
                                        {/* For mobile view: Dropdown menu */}
                                        <li className="block lg:hidden">
                                            <div className="bg-gray-800 absolute top-12 right-0 w-32 p-2 rounded-lg shadow-lg z-10">
                                                <Link to={"/"} className="block text-gray-200 hover:text-gray-300 font-medium duration-150 py-2 w-fit underline-nav-items">Home</Link>
                                                <button onClick={toggleModal} className="block text-gray-200 hover:text-gray-300 font-medium duration-150 py-2 underline-nav-items">Logout</button>
                                            </div>
                                        </li>

                                        {/* For larger screens: Regular navbar */}
                                        <li className="hidden lg:block">
                                            <Link to={"/"} className="text-gray-200 hover:text-gray-300 font-medium duration-150 underline-nav-items">Home</Link>
                                        </li>
                                        <li className="hidden lg:block">
                                            <button onClick={toggleModal} className="text-gray-200 hover:text-gray-300 font-medium duration-150 underline-nav-items">Logout</button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </>
                    :
                    <>
                        <div className="h-screen flex flex-col justify-center items-center space-y-3 bg-gray-100">
                            <h1 className='text-gray-800 font-bold lg:text-3xl text-2xl text-center'>Please Login or Sign Up</h1>
                            <p className="text-gray-600 font-semibold text-xl">Go to <Link className='text-blue-700 hover:underline' to={'/'}>homepage</Link></p>
                        </div>

                    </>
            }
            
            {/* Modal */}
            {showModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg w-72">
                        <h2 className="text-gray-800 text-lg font-semibold mb-4">Confirm Logout</h2>
                        <p className="text-gray-600 mb-6">Are you sure you want to logout?</p>
                        <div className="flex justify-end">
                            <button onClick={logout} className="text-red-600 hover:bg-red-600 hover:text-white duration-200 px-2 py-1 rounded-lg font-medium mr-4" type="button">
                                Logout
                            </button>
                            <button onClick={toggleModal} className="text-gray-600 hover:bg-gray-600 hover:text-white duration-200 px-2 py-1 rounded-lg font-medium" type="button">
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>

    );
};

export default Header;