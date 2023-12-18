import { useState } from 'react';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-gray-800 p-4">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <div className="flex items-center">
                    <a href="/" className="text-white text-xl font-bold">
                        Your Logo
                    </a>
                </div>

                {/* Hamburger menu for mobile */}
                <div className="block lg:hidden">
                    <button
                        onClick={toggleNavbar}
                        className="text-white focus:outline-none focus:ring"
                    >
                        <svg
                            className="h-6 w-6 fill-current"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 100 2h12a1 1 0 100-2H3zM4 15a1 1 0 011-1h12a1 1 0 110 2H5a1 1 0 01-1-1z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </button>
                </div>

                {/* Navbar links */}
                <div className={`lg:flex ${isOpen ? 'block' : 'hidden'} mt-4 lg:mt-0`}>
                    <ul className="lg:flex space-x-4">
                        <li>
                            <a href="/" className="text-white hover:text-gray-300">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="/about" className="text-white hover:text-gray-300">
                                About
                            </a>
                        </li>
                        <li>
                            <a href="/services" className="text-white hover:text-gray-300">
                                Services
                            </a>
                        </li>
                        <li>
                            <a href="/contact" className="text-white hover:text-gray-300">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;