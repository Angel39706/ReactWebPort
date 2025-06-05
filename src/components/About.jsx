import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Skills from "./Skills";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const aboutRef = useRef(null);
    const skillsRef = useRef(null);

    useEffect(() => {
        // Animation for About Me section
        const aboutAnimation = gsap.fromTo(
            aboutRef.current,
            { opacity: 0, y: 30 },
            {
                opacity: 1,
                y: 0,
                duration: 1.0,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: aboutRef.current,
                    start: "top 80%",
                    end: "bottom 50%",
                    toggleActions: "play none none reset",
                },
            }
        );

        // Animation for Skills section
        const skillsAnimation = gsap.fromTo(
            skillsRef.current,
            { opacity: 0, y: 30 },
            {
                opacity: 1,
                y: 0,
                duration: 1.0,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: skillsRef.current,
                    start: "top 80%",
                    end: "bottom 50%",
                    toggleActions: "play none none reset",
                },
            }
        );

        return () => {
            aboutAnimation.kill();
            skillsAnimation.kill();
        };
    }, []);

    return (
        <div className="text-white max-w-[1200px] mx-auto mt-24 my-12 p-5 scroll-mt-24" id="about">
            <div className="flex flex-col md:flex-row gap-8">
                {/* About Me Section */}
                <div className="flex-1 md:mx-6" ref={aboutRef}>
                    <h2 className="text-4xl font-bold mb-4 primary-color"> About Me</h2>
                    <p className="text-base lg:text-lg">
                        Hello! When I’m not diving into code or playing video games, you’ll also find me at the gym. I’m also a huge car enthusiast and can’t wait to travel the world and experience new adventures.
                    </p>
                </div>

                {/* Tech Stack Section */}
                <div className="flex-1" ref={skillsRef}>
                    <Skills />
                </div>
            </div>
        </div>
    );
};

export default About;
