import React from 'react';
import linkedIn from "../assets/contact/linkedin.png";
import github from "../assets/contact/github.png";
import email from "../assets/contact/email.png";

export const Contact = () => {
    return (
        <div className='max-w-[1200px] mx-auto bg-black sm:py-20 p-5' id="contact">
            <div className='text-center'>
                <h2 className='text-4xl font-bold leading-tight primary-color'>Contact Me</h2>
            </div>

            <div className='max-w-[800px] mx-auto'>
                <div className="mt-6 bg-gray-800 rounded-xl">
                    <div className="p-10 flex justify-center items-center space-x-16">
                        {/* LinkedIn Icon */}
                        <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group rounded-md flex justify-center items-center h-32 w-32 bg-cover relative">
                            <a href="https://www.linkedin.com/in/angel39706/" target="_blank" rel="noopener noreferrer">
                                <img src={linkedIn} alt="LinkedIn" className="w-full h-full object-cover" />
                            </a>
                            <div className="opacity-0 group-hover:opacity-90 absolute inset-0 flex flex-col justify-center items-center">
                                <div className="pt-6 text-center">
                                    <a href="https://www.linkedin.com/in/angel39706/" target="_blank" rel="noopener noreferrer">
                                        <button className="rounded-lg px-20 py-20 m-2"></button>
                                    </a>
                                </div>
                            </div>
                        </div>
                        
                        {/* GitHub Icon */}
                        <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group rounded-md flex justify-center items-center h-32 w-32 bg-cover relative">
                            <a href="https://github.com/Angel39706" target="_blank" rel="noopener noreferrer">
                                <img src={github} alt="GitHub" className="w-full h-full object-cover" />
                            </a>
                            <div className="opacity-0 group-hover:opacity-90 absolute inset-0 flex flex-col justify-center items-center">
                                <div className="pt-6 text-center">
                                    <a href="https://github.com/Angel39706" target="_blank" rel="noopener noreferrer">
                                        <button className="rounded-lg px-20 py-20 m-2"></button>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Email Icon */}
                        <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group rounded-md flex justify-center items-center h-32 w-32 bg-cover relative">
                        <a href="mailto:angelmartinezdev165@gmail.com" target="_blank" rel="noopener noreferrer">
                                <img src={email} alt="GitHub" className="w-full h-full object-cover" />
                        </a>
                            <div className="opacity-0 group-hover:opacity-90 absolute inset-0 flex flex-col justify-center items-center">
                                <div className="pt-6 text-center">
                                    <a href="mailto:angelmartinezdev165@gmail.com">
                                        <button className="rounded-lg px-20 py-20 m-2"></button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact
