import React from 'react'
import Logo from './Logo'
import { AiFillGithub } from 'react-icons/ai';
import { FaLinkedin } from 'react-icons/fa'

const Navbar = () => {
    return (
        <nav className="sticky flex items-center justify-between top-0 text-white lg:py-4 mb-5 md:mb-10">
            <div className='text-lg'>
                <Logo />
            </div>
            <div className='flex'>
                <a className='mr-5'>
                    <AiFillGithub style={{ fontSize: '30px' }} />
                </a>
                <a>
                    <FaLinkedin style={{ fontSize: '30px' }} />
                </a>
            </div>
        </nav>
    )
}

export default Navbar