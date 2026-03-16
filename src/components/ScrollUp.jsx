import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) setVisible(true);
            else setVisible(false);
        };
        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <>
            {visible && (
                <button
                    onClick={scrollToTop}
                    className="
            fixed bottom-8 right-8
            bg-indigo-600 hover:bg-indigo-700
            text-white p-4 rounded-full
            shadow-lg hover:shadow-xl
            transition-all duration-300
            z-50"
                    aria-label="Scroll to top"
                >
                    <FaArrowUp className="w-5 h-5" />
                </button>
            )}
        </>
    );
};

export default ScrollToTop;