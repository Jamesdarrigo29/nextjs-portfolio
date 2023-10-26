import React from 'react'
import Navbar from '../../components/Navbar'


const page = () => {
    return (
        <main className="flex min-h-screen flex-col bg-[#121212]">
            <div className='container mx-auto px-12 py-4'>
                <Navbar />
            </div>
        </main>
    )
}

export default page