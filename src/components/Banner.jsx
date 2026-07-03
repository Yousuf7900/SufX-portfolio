import { MdKeyboardArrowRight } from "react-icons/md";
import {
    FaFacebookF,
    FaGithub,
    FaLinkedinIn,
    FaDribbble,
    FaInstagram,
    FaDownload,
} from "react-icons/fa";
import bannerImg from "../assets/Yousuf.jpg";

const Banner = () => {
    return (
        <div className="w-full h-[800px] lg:h-[700px] flex items-center justify-center px-6 relative">
            <div className="flex flex-col lg:flex-row items-center justify-center max-w-6xl w-full gap-12 z-20">

                {/* Profile Image */}
                <div className="shrink-0">
                    <img
                        src={bannerImg}
                        alt="Yousuf Islam"
                        className="w-64 h-64 lg:w-72 lg:h-72 rounded-full border-8 border-fuchsia-950 object-cover shadow-xl"
                    />
                </div>

                {/* Content */}
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-6">

                    <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                        Hello, I'm{" "}
                        <span className="text-amber-500">
                            Yousuf Islam!
                        </span>
                    </h1>

                    {/* Connect & Social */}
                    <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">

                        <p className="text-lg lg:text-xl text-gray-300 flex items-center gap-2">
                            LET'S CONNECT
                            <MdKeyboardArrowRight className="text-amber-500 text-3xl" />
                        </p>

                        <div className="flex gap-5 text-white text-xl">
                            <a
                                href="https://www.facebook.com/yousuf.islam.5836711/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-blue-500 transition"
                            >
                                <FaFacebookF />
                            </a>

                            <a
                                href="#"
                                className="hover:text-gray-400 transition"
                            >
                                <FaGithub />
                            </a>

                            <a
                                href="https://www.linkedin.com/in/yousuf7900/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-blue-600 transition"
                            >
                                <FaLinkedinIn />
                            </a>

                            <a
                                href="#"
                                className="hover:text-pink-400 transition"
                            >
                                <FaDribbble />
                            </a>

                            <a
                                href="#"
                                className="hover:text-pink-600 transition"
                            >
                                <FaInstagram />
                            </a>
                        </div>
                    </div>

                    <a
                        href="/resume/v1_Yousuful_Islam_MERN_CV.pdf"
                        download
                        className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-black font-semibold px-6 py-3 rounded-full shadow-lg transition-all duration-300 hover:scale-105"
                    >
                        <FaDownload />
                        Download CV
                    </a>

                </div>
            </div>
        </div>
    );
};

export default Banner;