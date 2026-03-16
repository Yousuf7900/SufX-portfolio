import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

// Example project data
const projects = [
    {
        title: "Portfolio Website",
        img: "https://via.placeholder.com/400x250.png?text=Portfolio+Website",
        github: "#",
        live: "#"
    },
    {
        title: "E-commerce App",
        img: "https://via.placeholder.com/400x250.png?text=E-commerce+App",
        github: "#",
        live: "#"
    },
    {
        title: "Blog Platform",
        img: "https://via.placeholder.com/400x250.png?text=Blog+Platform",
        github: "#",
        live: "#"
    },
    {
        title: "Task Manager",
        img: "https://via.placeholder.com/400x250.png?text=Task+Manager",
        github: "#",
        live: "#"
    }
];

const CheckOutMyPortfolio = () => {
    return (
        <section id="portfolio" className="w-full bg-gray-50 py-24 px-6">
            <div className="max-w-6xl mx-auto text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">
                    Check Out My Portfolio
                </h2>
                <p className="text-gray-600 mt-2 text-lg">
                    Here are some of the projects I’ve worked on recently
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
                    >
                        <img
                            src={project.img}
                            alt={project.title}
                            className="w-full h-56 object-cover"
                        />
                        <div className="p-6 flex flex-col gap-4">
                            <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
                            <div className="flex gap-4">
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-gray-700 hover:text-black transition"
                                >
                                    <FaGithub /> GitHub
                                </a>
                                <a
                                    href={project.live}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition"
                                >
                                    <FaExternalLinkAlt /> Live
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default CheckOutMyPortfolio;