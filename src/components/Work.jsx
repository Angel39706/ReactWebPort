import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Work = () => {
    const experienceRef = useRef(null);

    useEffect(() => {
        const experienceAnimation = gsap.fromTo(
            experienceRef.current,
            { opacity: 0, y: 30 },
            {
                opacity: 1,
                y: 0,
                duration: 1.2,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: experienceRef.current,
                    start: "top 80%",
                    end: "bottom 50%",
                    toggleActions: "play none none reset",
                },
            }
        );

        return () => {
            experienceAnimation.kill();
        };
    }, []);

    return (
        <div className="mt-12 max-w-[1200px] mx-auto bg-black p-6 rounded-xl shadow-lg" ref={experienceRef}>
            <h2 className="text-4xl font-bold mb-4 primary-color text-center pt-20" id="experience">Work Experience</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                {/* Experience Card 1 */}
                <div className="bg-black p-6 rounded-xl shadow-lg border border-white">
                    <h3 className="text-lg font-bold text-white mb-2">Automated Systems Technician - San Bernardino County</h3>
                    <p className="text-sm text-gray-400 mb-4">November 2024 - Present</p>
                    <p className="text-base lg:text-lg text-white">
                        Develop and maintain SQL queries to prepare, analyze, and publish data for the Behavioral Health Management Information System, ensuring alignment with business rules and system controls. Configure, test, and document system settings, custom forms, and configurations within myAvatar, supporting smooth deployment and troubleshooting.
                    </p>
                </div>

                {/* Experience Card 2 */}
                <div className="bg-black p-6 rounded-xl shadow-lg border border-white">
                    <h3 className="text-lg font-bold text-white mb-2">Software Engineering Fellow - HeadStarter AI</h3>
                    <p className="text-sm text-gray-400 mb-4">July 2024 - September 2024</p>
                    <p className="text-base lg:text-lg text-white">
                        Developed applications using React, NextJS, Firebase, PostgreSQL, and OpenAI API, including a Pantry Tracker and AI-powered projects for customer support and flashcards. I also worked with AWS and Stripe API to integrate advanced features. Through weekly hackathons, I refined my project management and collaboration skills.
                    </p>
                </div>

                {/* Experience Card 3 */}
                <div className="bg-black p-6 rounded-xl shadow-lg border border-white">
                    <h3 className="text-xl font-bold text-white mb-2">Backend Engineer Intern - nGap Incorporated</h3>
                    <p className="text-sm text-gray-400 mb-4">Sept 2023 - Dec 2023</p>
                    <p className="text-base lg:text-lg text-white">
                        Prototyped and developed backend services in a microservice environment using Docker, Python, and RabbitMQ, including RESTful API endpoint creation with Flask for seamless communication. Implemented an asynchronous consumer and producer with C# and RabbitMQ to consume sensitive documents that were encoded in base64 and enrich the data within the Transformation layer of ETL. Utilized CRUD operations to develop business logic regarding user-generated records with the usage of SQL and Python's ORM SQLAlchemy.
                    </p>
                </div>

                {/* Experience Card 4 */}
                <div className="bg-black p-6 rounded-xl shadow-lg border border-white">
                    <h3 className="text-xl font-bold text-white mb-2">iOS Developer Intern- MDNR Energy Technology LLC</h3>
                    <p className="text-sm text-gray-400 mb-4">May 2023 - Aug 2023</p>
                    <p className="text-base lg:text-lg text-white">
                    Developed an iOS application with SwiftUI along with the MVVM architecture, integrating real-time API updates resulting a 25% efficiency boost in power consumption. Implemented NSNotifications for power system tracking, resulting in decrease of inefficiencies by 30%, cutting unnecessary costs through timely alerts for deviations. Visualized power consumption data throughout the day by generating interactive graphs, enabling users to analyze power consumption patterns to maintain efficiency in power consumption
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Work;
