import { useEffect, useState } from "react";
import { FaProjectDiagram, FaSmile, FaClock, FaCode } from "react-icons/fa";

const stats = [
    { id: 1, icon: FaProjectDiagram, number: 25, title: "Projects Completed" },
    { id: 2, icon: FaSmile, number: 15, title: "Happy Clients" },
    { id: 3, icon: FaClock, number: 2, title: "Years Experience" },
    { id: 4, icon: FaCode, number: 20, title: "Technologies Used" },
];

const Counter = ({ end }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const duration = 2000;
        const step = end / (duration / 20);

        const timer = setInterval(() => {
            start += step;
            if (start >= end) {
                setCount(end);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }
        }, 20);

        return () => clearInterval(timer);
    }, [end]);

    return <>{count}</>;
};

const Stats = () => {
    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat) => {
                    const Icon = stat.icon;

                    return (
                        <div
                            key={stat.id}
                            className="bg-white p-8 rounded-xl shadow hover:shadow-lg text-center"
                        >
                            <Icon className="text-indigo-600 text-3xl mx-auto mb-4" />

                            <h3 className="text-3xl font-bold text-gray-800">
                                <Counter end={stat.number} />+
                            </h3>

                            <p className="text-gray-500 mt-2">{stat.title}</p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Stats;