import { motion } from "framer-motion";

const Education = () => {
    const educationData = [
        {
            degree: "BSc in Computer Science & Engineering",
            institute: "Daffodil International University",
            year: "2022 - 2025",
            result: "CGPA: 3.32",
        },
        {
            degree: "Higher Secondary Certificate (HSC) - Science",
            institute: "Cumilla Gov’t City College",
            year: "2018 - 2020",
            result: "GPA: 5.00",
        },
        {
            degree: "Secondary School Certificate (SSC) - Science",
            institute: "Cumilla Zilla School",
            year: "2016 - 2018",
            result: "GPA: 4.94",
        },
    ];

    return (
        <section className="py-24 bg-gray-50 px-6">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-20">
                    <h2 className="text-4xl font-extrabold text-gray-900">
                        My Education
                    </h2>
                    <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
                        A journey of knowledge and skills that forms the foundation of my
                        expertise in computer science and software development.
                    </p>
                </div>

                <div className="relative">
                    <div className="absolute left-8 top-0 w-1 bg-indigo-600 h-full rounded"></div>

                    <div className="space-y-16">
                        {educationData.map((edu, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                className="flex items-start relative"
                            >
                                <div className="flex flex-col items-center">
                                    <div className="w-5 h-5 bg-indigo-600 rounded-full border-2 border-white -mt-1"></div>
                                </div>

                                <div className="ml-12 bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-indigo-300 transition-shadow duration-300 w-full">
                                    <h3 className="text-xl font-bold text-gray-900">
                                        {edu.degree}
                                    </h3>
                                    <p className="text-indigo-600 font-semibold mt-1">
                                        {edu.institute}
                                    </p>
                                    <div className="flex justify-between mt-3 text-gray-500 text-sm">
                                        <span>{edu.year}</span>
                                        <span>{edu.result}</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;