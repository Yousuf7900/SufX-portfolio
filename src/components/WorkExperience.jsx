import { FaBriefcase } from "react-icons/fa";
import { motion } from "framer-motion";

const workExperience = [
    {
        company: "TechCorp Inc.",
        role: "Frontend Developer",
        duration: "Jan 2022 - Present",
        description:
            "Developed and maintained responsive web applications using React and Tailwind CSS. Collaborated with designers and backend team to enhance user experience.",
    },
    {
        company: "DesignStudio",
        role: "UI/UX Designer",
        duration: "Jun 2020 - Dec 2021",
        description:
            "Designed intuitive user interfaces for web and mobile apps. Created wireframes, mockups, and interactive prototypes.",
    },
    {
        company: "WebSolutions Ltd.",
        role: "Junior Developer",
        duration: "Jan 2019 - May 2020",
        description:
            "Assisted in developing web applications, implemented features, and optimized performance. Learned full-stack development fundamentals.",
    },
];

const WorkExperience = () => {
    return (
        <section id="experience" className="w-full bg-gray-50 py-24 px-6">
            <div className="max-w-6xl mx-auto text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">
                    My Work Experience
                </h2>
                <p className="text-gray-600 mt-2 text-lg">
                    A brief timeline of my professional journey
                </p>
            </div>

            <div className="relative max-w-6xl mx-auto">
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-gray-300"></div>

                {workExperience.map((item, index) => {
                    const isLeft = index % 2 === 0;

                    return (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="relative flex flex-col lg:flex-row items-center lg:items-start my-12"
                        >
                            <div
                                className={`lg:w-1/2 lg:pr-12 ${isLeft ? "lg:text-right" : "lg:text-left"
                                    } text-center`}
                            >
                                <div className="inline-block bg-indigo-600 text-white p-3 rounded-full mb-3">
                                    <FaBriefcase size={20} />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800">
                                    {item.role}
                                </h3>
                                <p className="text-gray-600">{item.company}</p>
                                <p className="text-gray-400 text-sm">{item.duration}</p>
                            </div>

                            <div className="absolute left-1/2 transform -translate-x-1/2 bg-indigo-600 w-5 h-5 rounded-full border-2 border-white z-10"></div>

                            <div
                                className={`lg:w-1/2 lg:pl-12 mt-4 lg:mt-0 ${isLeft ? "lg:text-left" : "lg:text-right"
                                    } text-center lg:text-left`}
                            >
                                <p className="text-gray-700">{item.description}</p>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
};

export default WorkExperience;