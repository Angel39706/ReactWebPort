import React from "react";

const About = () => {
    return (
        <div className="text-white max-w-[1200px] mx-auto my-12 p-5" id="about">
            <div className="mt-4 md:mt-0 text-left flex flex-col md:flex-row h-full justify-start py-6 md:py-0">

                <div className="flex-1 md:mx-6">
                    <h2 className="text-4xl font-bold mb-4 primary-color"> About Me</h2>
                    <p className="text-base lg:text-lg">
                        Hello! I'm an aspiring software engineer who graduated with a bachelor's of science degree in computer engineering from California State University, San Bernardino. When I’m not diving into coding or enjoying video games, you’ll also find me at the gym. I’m also a huge car enthusiast and can’t wait to travel the world and experience new adventures.
                    </p>
                </div>

                <div className="flex-1 md:mx-6 mt-8 md:mt-0">
                    <h2 className="text-4xl font-bold mb-4 primary-color"> Current Projects</h2>
                    <p className="text-base lg:text-lg">
                        As part of the Headstarter Fellowship, I am focusing on several key projects to enhance my web development skills over the next seven weeks. These include developing a personal website, building a Pantry Tracker application, and collaborating on AI-based customer support and flashcard applications. These projects allow me to apply modern technologies like React, Node.js, Docker, Firebase, Python, and PostgreSQL while gaining hands-on experience in full-stack development.
                    </p>

                </div>
            </div>
        </div>
    );
};

export default About;
