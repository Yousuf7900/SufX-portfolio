import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Niyor_IMG from '../assets/Projects/niyor.png';
import dropify from '../assets/Projects/dropify.png';
import ls from '../assets/Projects/ls.png'; // optional static image
import lb from '../assets/Projects/lb.png'; // optional static image

const projects = [
    {
        title: "Niyor E-commerce App",
        img: Niyor_IMG,
        github: "https://github.com/Yousuf7900?tab=repositories",
        live: "https://niyor.web.app/"
    },
    {
        title: "Dropify Digital Product App",
        img: dropify,
        github: "https://github.com/Yousuf7900?tab=repositories",
        live: "https://dropify-shop.web.app/"
    },
    {
        title: "Lingo-Bingo",
        img: lb,
        github: "https://github.com/Yousuf7900?tab=repositories",
        live: "https://lingo-bingo-e3d4e.web.app/"
    },
    {
        title: "LearnSphere",
        img: ls,
        github: "https://github.com/Yousuf7900?tab=repositories",
        live: "https://learnsphere-study.web.app/"
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
                        className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 flex flex-col"
                    >
                        {/* Static Front Page Preview */}
                        <div className="relative w-full h-56">
                            <img
                                src={project.img}
                                alt={project.title}
                                className="w-full h-full object-cover rounded-t-2xl"
                            />
                            {/* Optional overlay effect */}
                            <div className="absolute inset-0 bg-black/10 rounded-t-2xl opacity-0 hover:opacity-10 transition duration-300"></div>
                        </div>

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