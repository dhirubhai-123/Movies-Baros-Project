import React from 'react'
import MoviesBarosLogo_black from "../assets/MoviesBarosLogo_black.png"

const Footer = () => {
    return (
        <div>
            <footer className="footer bg-base-200 text-base-content p-10">
                <aside>
                    <div className='text-2xl'>
                        <span className='text-white font-semibold '>Movies</span>
                        <span
                            className='text-red-400 font-semibold border-white'
                        >
                            Baros</span>
                    </div>

                    <p>
                        Made by Dhiraj Khedkar.
                        <br />
                        Providing best ones to You !!
                    </p>
                </aside>
                <nav>
                    <h6 className="footer-title">Social</h6>
                    <a className="relative hover:cursor-pointer hover:left-2 hover:text-yellow-200 transition-all duration-300">Linkedin</a>
                    <a className="relative hover:cursor-pointer hover:left-2 hover:text-yellow-200 transition-all duration-300">GitHub</a>

                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="relative hover:cursor-pointer hover:left-2 hover:text-yellow-200 transition-all duration-300">Home</a>
                    <a className="relative hover:cursor-pointer hover:left-2 hover:text-yellow-200 transition-all duration-300">About us</a>
                    <a className="relative hover:cursor-pointer hover:left-2 hover:text-yellow-200 transition-all duration-300">TopNotch</a>
                    <a className="relative hover:cursor-pointer hover:left-2 hover:text-yellow-200 transition-all duration-300">MoviesNShows</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="relative hover:cursor-pointer hover:left-2 hover:text-yellow-200 transition-all duration-300">Terms of use</a>
                    <a className="relative hover:cursor-pointer hover:left-2 hover:text-yellow-200 transition-all duration-300">Privacy policy</a>
                    <a className="relative hover:cursor-pointer hover:left-2 hover:text-yellow-200 transition-all duration-300">Cookie policy</a>
                </nav>
            </footer>
            <footer className="footer footer-center bg-base-200 text-base-content p-4">
                <aside>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved by MoviesBaros.</p>
                </aside>
            </footer>
        </div>
    )
}

export default Footer