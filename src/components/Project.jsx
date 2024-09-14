import React from "react";
import angelsplit from "../assets/projects/AngelsSplitLogo.png";
import limit from "../assets/projects/appstore1024.png";
import college from "../assets/projects/phonto-2.png";
import flashcard from "../assets/projects/aiFlashcard.png"
import pantry from "../assets/projects/pantry.jpg"
import aiDetector from "../assets/projects/aiComplaint.jpg"
import devFolio from "../assets/projects/DevFolio.png"
import professorAi from "../assets/projects/ProfessorAi.png"

const Project = () => {
    return (
        <div className="max-w-[1200px] mx-auto p-5" id="projects">
            {/* Web Development Section */}
            <div id="web-development" className="pb-8">
                <p className="text-4xl mb-3 font-bold primary-color">Projects</p>
                <p className="text-gray-400 text-xl mb-4">Web Development</p>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden
                                    shadow-lg shadow-[#040c16] group rounded-md flex justify-center items-center
                                    h-[200px] bg-cover relative">
                        <img src={devFolio} alt="AngelsSplit" className="w-full h-full object-cover" />
                        <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
                            <span className="text-2xl font-bold text-white tracking-wider">DevFolio</span>
                            <div className="pt-8 text-center">
                                <a href="https://dev-portfolio-drab-five.vercel.app" target="_blank" rel="noopener noreferrer">
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                                        Live
                                    </button>
                                </a>
                                <a href="https://github.com/raglandconnor/dev-portfolio" target="_blank" rel="noopener noreferrer">
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                                        Github
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden
                                    shadow-lg shadow-[#040c16] group rounded-md flex justify-center items-center
                                    h-[200px] bg-cover relative">
                        <img src={professorAi} alt="AngelsSplit" className="w-full h-full object-cover" />
                        <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
                            <span className="text-2xl font-bold text-white tracking-wider">DevFolio</span>
                            <div className="pt-8 text-center">
                                <a href="https://professor-ai-hs.vercel.app" target="_blank" rel="noopener noreferrer">
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                                        Live
                                    </button>
                                </a>
                                <a href="https://github.com/lhkhoi95/professor-ai" target="_blank" rel="noopener noreferrer">
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                                        Github
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    
                    <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden
                                    shadow-lg shadow-[#040c16] group rounded-md flex justify-center items-center
                                    h-[200px] bg-cover relative">
                        <img src={aiDetector} alt="AngelsSplit" className="w-full h-full object-cover" />
                        <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
                            <span className="text-2xl font-bold text-white tracking-wider">Zeal Ai</span>
                            <div className="pt-8 text-center">
                            <a href="https://complaint-detection-kappa.vercel.app" target="_blank" rel="noopener noreferrer">
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                                        Live
                                    </button>
                                </a>
                                <a href="https://github.com/raglandconnor/complaint-detection" target="_blank" rel="noopener noreferrer">
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                                        Github
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden
                                    shadow-lg shadow-[#040c16] group rounded-md flex justify-center items-center
                                    h-[200px] bg-cover relative">
                        <img src={flashcard} alt="AngelsSplit" className="w-full h-full object-cover" />
                        <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
                            <span className="text-2xl font-bold text-white tracking-wider">Discent Ai</span>
                            <div className="pt-8 text-center">
                                <a href="https://discent-ai.vercel.app" target="_blank" rel="noopener noreferrer">
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                                        Live
                                    </button>
                                </a>
                                <a href="https://github.com/NisargOza/flashcard-saas" target="_blank" rel="noopener noreferrer">
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                                        Github
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden
                                    shadow-lg shadow-[#040c16] group rounded-md flex justify-center items-center
                                    h-[200px] bg-cover relative">
                        <img src={pantry} alt="AngelsSplit" className="w-full h-full object-cover" />
                        <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
                            <span className="text-2xl font-bold text-white tracking-wider">Pantry Tracker</span>
                            <div className="pt-8 text-center">
                                <a href="https://pantry-tracker-angelm.vercel.app" target="_blank" rel="noopener noreferrer">
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                                        Live
                                    </button>
                                </a>
                                <a href="https://github.com/Angel39706/PantryTracker" target="_blank" rel="noopener noreferrer">
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                                        Github
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    
                    {/* Add more web development projects here */}
                </div>
            </div>

            {/* iOS Development Section */}
            <div id="ios-development" className="pb-8">
                <p className="text-gray-400 text-xl mb-4">iOS Development</p>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden
                                    shadow-lg shadow-[#040c16] group rounded-md flex justify-center items-center
                                    h-[200px] bg-cover relative">
                        <img src={limit} alt="Limit" className="w-full h-full object-cover" />
                        <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
                            <span className="text-2xl font-bold text-white tracking-wider">Limit</span>
                            <div className="pt-8 text-center">
                                <a href="https://github.com/Kevin10588/limit" target="_blank" rel="noopener noreferrer">
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                                        Github
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden
                                    shadow-lg shadow-[#040c16] group rounded-md flex justify-center items-center
                                    h-[200px] bg-cover relative">
                        <img src={angelsplit} alt="AngelsSplit" className="w-full h-full object-cover" />
                        <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
                            <span className="text-2xl font-bold text-white tracking-wider">AngelsSplit</span>
                            <div className="pt-8 text-center">
                                <a href="https://github.com/Angel39706/AngelsSplit" target="_blank" rel="noopener noreferrer">
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                                        Github
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden
                                    shadow-lg shadow-[#040c16] group rounded-md flex justify-center items-center
                                    h-[200px] bg-cover relative">
                        <img src={college} alt="College" className="w-full h-full object-cover" />
                        <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
                            <span className="text-2xl font-bold text-white tracking-wider">College Life</span>
                            <div className="pt-8 text-center">
                                <a href="https://github.com/Angel39706/CampusLife" target="_blank" rel="noopener noreferrer">
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                                        Github
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Project;
