import { motion } from "framer-motion";

const techData = [
  { skill: "JavaScript", level: 90, icon: "🟨" },
  { skill: "React.js", level: 85, icon: "⚛️" },
  { skill: "Node.js", level: 80, icon: "🟩" },
  { skill: "HTML & CSS", level: 95, icon: "📄" },
  { skill: "Tailwind CSS", level: 90, icon: "💨" },
  { skill: "Python", level: 75, icon: "🐍" },
];

const Techs = () => {
  return (
    <section className="py-24 bg-gray-50 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900">My Skills</h2>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
            Technologies and programming languages I use to build professional
            software and web applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {techData.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-indigo-300 transition-shadow duration-300"
            >
              {/* Skill Header */}
              <div className="flex items-center mb-4 space-x-3 text-xl">
                <span>{tech.icon}</span>
                <h3 className="text-xl font-semibold text-gray-800">{tech.skill}</h3>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${tech.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  className="h-full bg-indigo-600 rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Techs;