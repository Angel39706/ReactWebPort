import React from "react";
import heroImage from '../assets/me/MyImage.jpg';

const Hero = () => {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[1200px] md:h-[70vh] mx-auto py-8 bg-black'>
            <div className='col-span-1 my-auto mx-auto w-[300px] h-auto lg:w-[400px]'>           
                    <img src={heroImage} alt='hero section'/> 
            </div>  
                <div className="col-span-2 px-5 my-auto">

                    <h1 className="text-white text-4xl sm:text-5xl lg:text-7xl font-extrabold">
                        <span className="primary-color">
                            I'm a
                        </span> <br/>
                        Software Developer
                    </h1>

                    <p className="text-white sm:text-lg my-6 lg:text-l">
                        Obtained my bachelor's in Computer Engineering with Internship and fellowship experiences
                    </p>

                    <div className="my-8">
                        <a href='https://docs.google.com/document/d/1mh3SvKJPd9paD7Z2ldn0AN7zVPRkIE_v7_lqPD1Na4o/edit?usp=sharing' className="px-6 py-3 w-full rounded-xl mr-4 
                            bg-gradient-to-br from-blue-400 to-teal-600 text-white">
                            Download Resume
                        </a>
                        <a href='#contact' className="px-6 py-3 w-full rounded-xl mr-4 border
                             border-gray-400 hover:bg-gradient-to-br from-blue-400 to-teal-600 text-white hover:border-none">
                            Contact
                        </a>
                    </div>

                </div>
            </div>
    )
}

export default Hero