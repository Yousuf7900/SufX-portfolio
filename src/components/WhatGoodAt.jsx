import { FaLaptopCode, FaMobileAlt, FaEnvelope, FaPalette, FaPenFancy, FaGlobe } from "react-icons/fa";

const skills = [
    {
        title: "Web Development",
        icon: <FaLaptopCode className="text-4xl text-indigo-600" />,
        description: "Building modern, responsive, and efficient websites tailored to your needs."
    },
    {
        title: "Mobile Development",
        icon: <FaMobileAlt className="text-4xl text-green-500" />,
        description: "Creating cross-platform and native mobile applications with smooth UX."
    },
    {
        title: "Email Development",
        icon: <FaEnvelope className="text-4xl text-red-500" />,
        description: "Designing responsive and engaging email campaigns for marketing."
    },
    {
        title: "Graphic Design",
        icon: <FaPalette className="text-4xl text-pink-500" />,
        description: "Crafting visuals and graphics that make brands stand out."
    },
    {
        title: "Technical Writing",
        icon: <FaPenFancy className="text-4xl text-yellow-500" />,
        description: "Producing clear, concise, and high-quality technical content."
    },
    {
        title: "Web Design",
        icon: <FaGlobe className="text-4xl text-blue-500" />,
        description: "Designing user-friendly and visually appealing web interfaces."
    },
];

const WhatGoodAt = () => {
    return (
        <section id="services" className="w-full bg-gray-50 py-24 px-6">
            <div className="max-w-6xl mx-auto text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">Here's What I'm Good At</h2>
                <p className="text-gray-600 mt-2 text-lg">These are the services I offer to help your business grow</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {skills.map((skill, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300"
                    >
                        <div className="mb-4">{skill.icon}</div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">{skill.title}</h3>
                        <p className="text-gray-600">{skill.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default WhatGoodAt;