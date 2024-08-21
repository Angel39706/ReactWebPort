import React from "react";
import html from "../assets/skills/html.png"
import css from "../assets/skills/css.png"
import javascript from "../assets/skills/javascript.png"
import python from "../assets/skills/python.png"
import swift from "../assets/skills/swift.png"
import node from "../assets/skills/nodejs.png"
import docker from "../assets/skills/docker.png"
import postgres from "../assets/skills/postgres.png"

const Skills = () => {
    return (
        <div className="border border-gray-600 bg-black text-gray-400 md:h-[150px] mx-w-[1200px] mx-auto grid grid-cols-3
            place-items-center md:flex md:justify-between md:items-center">
            <h2 className="text-gray-700 text-2xl md:text-4xl font-bold m-4">
                 Tech <br/> Stack
            </h2>
            <div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]">
                <img src={python} alt=""/>
                <p className="mt-2">Python</p>
            </div>
            <div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]">
                <img src={swift} alt=""/>
                <p className="mt-2">Swift</p>
            </div>
            <div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]">
                <img src={javascript} alt=""/>
                <p className="mt-2">JavaScript</p>
            </div>
            <div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]">
                <img src={node} alt=""/>
                <p className="mt-2">Node.js</p>
            </div>
            <div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]">
                <img src={docker} alt=""/>
                <p className="mt-2">Docker</p>
            </div>
            <div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]">
                <img src={postgres} alt=""/>
                <p className="mt-2">PostgreSQL</p>
            </div>
            <div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]">
                <img src={html} alt=""/>
                <p className="mt-2">HTML5</p>
            </div>
            <div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]">
                <img src={css} alt=""/>
                <p className="mt-2">CSS3</p>
            </div>

        </div>
    );
}

export default Skills