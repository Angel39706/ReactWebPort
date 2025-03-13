import React from "react";
import python from "../assets/skills/python.png";
import swift from "../assets/skills/swift.png";
import reactLogo from "../assets/skills/react.png";
import node from "../assets/skills/nodejs.png";
import postgres from "../assets/skills/postgres.png";
import mongoDB from "../assets/skills/MongoDB.png";

const Skills = () => {
  return (
    <div className="max-w-[1200px] mx-auto bg-black p-6 rounded-xl shadow-lg border border-white text-white">
      <h2 className="text-white text-2xl md:text-3xl font-bold text-center mb-6">
        Tech Stack
      </h2>
      <div className="flex flex-wrap justify-center gap-6">
        <div className="flex items-center space-x-2">
          <img src={python} alt="Python" className="w-[40px] md:w-[60px]" />
          <p className="text-sm md:text-base">Python</p>
        </div>
        <div className="flex items-center space-x-2">
          <img src={swift} alt="Swift" className="w-[40px] md:w-[60px]" />
          <p className="text-sm md:text-base">Swift</p>
        </div>
        <div className="flex items-center space-x-2">
          <img src={reactLogo} alt="React" className="w-[40px] md:w-[60px]" />
          <p className="text-sm md:text-base">React</p>
        </div>
        <div className="flex items-center space-x-2">
          <img src={node} alt="Node.js" className="w-[40px] md:w-[60px]" />
          <p className="text-sm md:text-base">Node.js</p>
        </div>
        <div className="flex items-center space-x-2">
          <img src={postgres} alt="PostgreSQL" className="w-[40px] md:w-[60px]" />
          <p className="text-sm md:text-base">PostgreSQL</p>
        </div>
        <div className="flex items-center space-x-2">
          <img src={mongoDB} alt="MongoDB" className="w-[40px] md:w-[60px h-[60px]" />
          <p className="text-sm md:text-base">MongoDB</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
