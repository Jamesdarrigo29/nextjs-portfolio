import React from 'react'
import Logo from './Logo'
import { AiFillGithub } from 'react-icons/ai';
import { FaLinkedin } from 'react-icons/fa'

const Navbar = () => {
    return (
        <nav className="sticky grid sm:grid-cols-12 items-center top-0 text-white lg:py-4 mb-10" data-te-navbar-ref>
            <div className="col-span-4 mx-auto order-2 md:order-1">
                <AiFillGithub />
            </div>
            <div className="col-span-4 mx-auto order-1 md:order-2">
                <Logo />
            </div>
            <div className="col-span-4 mx-auto order-3">
                <FaLinkedin />
            </div>
        </nav>
    )
}

export default Navbar