import React from "react";
import nGap from "../assets/workexp/ngap.webp";
import mdnr from "../assets/workexp/MDNREnergyLogo.png";
import headstart from "../assets/workexp/theheadstarter_logo.jpeg";

const Work = () => {
    return (
        <div className="max-w-[1200px] mx-auto p-5" id="experience">
            <div className="pb-8">
                <p className="text-4xl mb-3 font-bold primary-color">Professional Experience</p>
                <p className="text-gray-400">Most Recent Experiences</p>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                {/* Card for Headstarter AI */}
                <div className="bg-gray-800 text-white p-5 rounded-lg shadow-lg flex flex-col items-center">
                    <img src={headstart} alt="Headstarter AI" className="w-full h-32 object-cover mb-4 rounded-md" />
                    <h3 className="text-xl font-semibold mb-2">Headstarter AI</h3>
                    <p className="text-gray-400 text-sm mb-2">Software Engineering Fellow</p>
                    <p className="text-gray-400 text-sm mb-4">July 2024 - September 2024</p>
                    <ul className="text-gray-300 list-disc list-inside space-y-2">
                        <li>Building a Pantry Tracker application using ReactJS, NextJS, and Firebase, showcasing my ability to create full-stack solutions.</li>
                        <li>Collaborating on AI Customer Support and AI Flashcards projects leveraging OpenAI, NextJS, AWS, and StripeAPI, demonstrating teamwork and advanced tech proficiency.</li>
                        <li>Participating in weekly hackathons and demo sessions, refining my project management, collaboration, and presentation skills in a fast-paced environment.</li>
                        <li>Selected Track A for Final Project: Aiming to achieve 1,000 people on a waitlist, 1,000 accounts created, or $1,000 in revenue. This track aligns with our team's strengths and provides clear targets for demonstrating success.</li>
                    </ul>
                </div>
                
                {/* Card for nGap */}
                <div className="bg-gray-800 text-white p-5 rounded-lg shadow-lg flex flex-col items-center">
                    <img src={nGap} alt="nGap" className="w-full h-32 object-cover mb-4 rounded-md" />
                    <h3 className="text-xl font-semibold mb-2">nGap Incorporated</h3>
                    <p className="text-gray-400 text-sm mb-2">Backend Developer Intern</p>
                    <p className="text-gray-400 text-sm mb-4">Sept 2023 - Dec 2023</p>
                    <ul className="text-gray-300 list-disc list-inside space-y-2">
                        <li>Prototyped and developed backend services in a microservice environment using Docker, Python, and RabbitMQ, including RESTful API endpoint creation with Flask for seamless communication.</li>
                        <li>Documented Backend APIs using Swagger and facilitated integration with Swagger UI, ensuring readability and smooth developer collaboration.</li>
                        <li>Implemented an asynchronous consumer and producer with C# and RabbitMQ to consume sensitive documents that were encoded in base64 and enrich the data within the Transformation layer of ETL.</li>
                        <li>Developed RESTful API endpoints using Python and its library Flask.</li>
                        <li>Utilized CRUD operations to develop business logic regarding user-generated records with the usage of SQL and Python's ORM SQLAlchemy.</li>
                    </ul>
                </div>
                
                {/* Card for MDNR Energy Technology LLC */}
                <div className="bg-gray-800 text-white p-5 rounded-lg shadow-lg flex flex-col items-center">
                    <img src={mdnr} alt="MDNR Energy Technology LLC" className="w-full h-32 object-cover mb-4 rounded-md" />
                    <h3 className="text-xl font-semibold mb-2">MDNR Energy Technology LLC</h3>
                    <p className="text-gray-400 text-sm mb-2">iOS Developer Intern</p>
                    <p className="text-gray-400 text-sm mb-4">May 2023 - Aug 2023</p>
                    <ul className="text-gray-300 list-disc list-inside space-y-2">
                        <li>Prototyped and developed backend services in a microservice environment using Docker, Python, and RabbitMQ, including RESTful API endpoint creation with Flask for seamless communication.</li>
                        <li>Documented Backend APIs using Swagger and facilitated integration with Swagger UI, ensuring readability and smooth developer collaboration.</li>
                        <li>Implemented an asynchronous consumer and producer with C# and RabbitMQ to consume sensitive documents that were encoded in base64 and enrich the data within the Transformation layer of ETL.</li>
                        <li>Developed RESTful API endpoints using Python and its library Flask.</li>
                        <li>Utilized CRUD operations to develop business logic regarding user-generated records with the usage of SQL and Python's ORM SQLAlchemy.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Work;
