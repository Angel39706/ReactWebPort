import React from 'react';
import linkedIn from "../assets/contact/linkedin.png";
import github from "../assets/contact/github.png";
import email from "../assets/contact/email.png";

export const Contact = () => {
    return (
        <div className='max-w-[1200px] mx-auto bg-black sm:py-20 p-5' id="contact">
            <div className='text-left'>
                <h2 className='text-4xl font-bold leading-tight primary-color'>Contact Me</h2>
            </div>

            <div className='max-w-[800px] mx-auto mt-10'>
                <div className="bg-black rounded-xl p-6 shadow-lg">
                    <div className="flex justify-center items-center gap-10">
                        {/* LinkedIn Icon */}
                        <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg group rounded-md p-6 bg-gray-800 relative hover:bg-primary-color border">
                            <a href="https://www.linkedin.com/in/angel39706/" target="_blank" rel="noopener noreferrer">
                                <img src={linkedIn} alt="LinkedIn" className="w-20 h-20 object-contain" />
                            </a>
                        </div>
                        
                        {/* GitHub Icon */}
                        <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg group rounded-md p-6 bg-gray-800 relative hover:bg-primary-color border">
                            <a href="https://github.com/Angel39706" target="_blank" rel="noopener noreferrer">
                                <img src={github} alt="GitHub" className="w-20 h-20 object-contain" />
                            </a>
                        </div>

                        {/* Email Icon */}
                        <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg group rounded-md p-6 bg-gray-800 relative hover:bg-primary-color border">
                            <a href="mailto:angelmartinezdev165@gmail.com" target="_blank" rel="noopener noreferrer">
                                <img src={email} alt="Email" className="w-20 h-20 object-contain" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
