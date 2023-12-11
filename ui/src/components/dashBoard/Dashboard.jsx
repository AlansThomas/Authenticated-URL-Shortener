import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Dashboard() {
    const navigate = useNavigate()
    const [isOpen, setIsOpen] = useState(false);

    const logout = () => {
        localStorage.clear();
        navigate('/')
    }
    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
        <nav className="bg-gray-800 p-4" >
            <div className="container mx-auto flex items-center justify-between">
                <Link to="/home" className="text-white font-bold text-lg">
                    Logo
                </Link>

                <button
                    onClick={toggleNavbar}
                    className="text-white focus:outline-none lg:hidden ml-auto">
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16m-7 6h7"
                        ></path>
                    </svg>
                </button>

                <div className={`lg:flex ${isOpen ? 'block' : 'hidden'}`}>
                    <button
                        onClick={() => logout()}
                        className="text-white flex items-center mt-4 lg:inline-block lg:mt-0 hover:text-gray-500 mr-4"
                    >
                        Logout
                    </button>
                </div>
            </div>
        </nav>
            <div className="relative">
                <img
                    src="/assets/home.gif"
                    alt="Home Gif"
                    className="w-screen h-screen object-cover"
                />
            </div>
        </>

    );
}





