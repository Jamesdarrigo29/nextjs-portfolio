import React from 'react'
import Image from 'next/image'

const HeroSection = () => {
    return (
        <section>
            <div className='grid grid-cols-1 sm:grid-cols-12'>
                <div className='col-span-7 place-self-center sm:mr-3 text-center sm:text-left'>
                    <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold'>
                        Hey! I'm James
                    </h1>
                    <p className='text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur fugiat perspiciatis iste ullam, sint magnam minus praesentium
                    </p>
                    <div>
                        <button className='px-6 w-full sm:w-fit py-3 rounded-full mr-4 bg-white hover:bg-slate-200 text-black'>Contact</button>
                        <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-transparent hover:bg-slate-800 text-white border mt-3 border-white'>Download Resume</button>
                    </div>
                </div>
                <div className='col-span-5 place-self-center mt-5 lg:mt-0'>
                    <div className='rounded-full bg-blue-400 w-[250px] h-[250px] lg:w-[300px] lg:h-[300px]'>
                        {/* <Image
                            src="/public/images/headshot.jpeg"
                            alt="hero image"
                            className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
                            width={300}
                            height={300}
                        /> */}
                    </div>

                </div>
            </div>
        </section>
    )
}

export default HeroSection