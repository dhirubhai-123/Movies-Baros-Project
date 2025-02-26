import React, { useState } from 'react';
import { LogOutIcon } from 'lucide-react';
import { useNavigate } from "react-router-dom"
import { useAuthStore } from '../Store/useAuthStore';

const Navbar = () => {

    const [mouseEnter, updateMouseEnter] = useState(true);
    const navigate = useNavigate();
    const { logout } = useAuthStore();

    const logOut = async () => {
        await logout();
    }

    return (

        <div className="navbar bg-base-200 sticky top-0 z-50 shadow-md bg-opacity-95">


            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="Frontend\src\assets\MoviesBarosLogo_white.png"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                        {/* <img src="Frontend\src\assets\MoviesBarosLogo_white.png" alt="webLogo" /> */}
                        {/* <div className='text-white text-3xl'>MoviesBaros</div> */}
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow">
                        <li><a onClick={() => navigate(`/movies`)} className='hover:text-red-400 duration-500'>Movies</a></li>
                        <li>
                            <a className='hover:text-red-400 duration-500'
                                onClick={() => navigate("/playlists")}
                            >PlayLists</a>
                            {/* <ul className="p-2">
                                <li><a className='hover:text-red-400 duration-500' onClick={() => navigate("/playlist/playlist1")}
                                > */}
                            {/* First PlayList</a></li> */}
                            {/* <li><a className='hover:text-red-400 duration-500'>Submenu 2</a></li> */}
                            {/* </ul> */}
                        </li>
                        <li><a onClick={() => navigate(`/movies`)} className='hover:text-red-400 duration-500'>Shows</a></li>
                    </ul>
                </div>
                <button className="btn btn-ghost text-xl md:text-3xl gap-1"
                    onMouseEnter={() => updateMouseEnter(!mouseEnter)} onMouseLeave={() => updateMouseEnter(!mouseEnter)}
                >
                    <span className='text-white font-semibold '>Movies</span>
                    <span
                        className={mouseEnter ? 'text-red-400 font-semibold border-white' : 'text-red-400 font-semibold border-white animate-bounce'}
                    >
                        Baros</span>
                </button>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a onClick={() => navigate(`/movies`)} className='hover:text-red-400 duration-500'>Movies</a></li>
                    <li>
                        <details>
                            <summary className='hover:text-red-400 duration-500'>PlayList</summary>
                            <ul className="p-2">
                                <li><a className='hover:text-red-400 duration-500'
                                    onClick={() => navigate('/playlists')}
                                >Playlists</a></li>
                                {/* <li><a className='hover:text-red-400 duration-500'>Submenu 2</a></li> */}
                            </ul>
                        </details>
                    </li>
                    <li><a onClick={() => navigate(`/shows`)} className='hover:text-red-400 duration-500'>Shows</a></li>
                </ul>
            </div>
            <div className="navbar-end">
                <div className="tooltip tooltip-left" data-tip="Logout">
                    <button className="btn"
                        onClick={logOut}
                    >
                        <LogOutIcon className='size-6 text-primary' />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Navbar;
