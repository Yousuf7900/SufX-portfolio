import { MdKeyboardArrowRight } from "react-icons/md";
import { FaFacebookF, FaGithub, FaLinkedinIn, FaDribbble, FaInstagram } from "react-icons/fa";
import bannerImg from '../assets/Yousuf.jpg';

const Banner = () => {
    return (
        <div className="w-full h-200 flex items-center justify-center px-6 relative">
            <div className="flex flex-col lg:flex-row items-center justify-center max-w-6xl w-full gap-12 z-20">

                <div className="shrink-0">
                    <img
                        src={bannerImg}
                        alt="Yousuf Islam"
                        className="w-64 h-64 lg:w-72 lg:h-72 rounded-full border-8 border-fuchsia-950 object-cover shadow-xl"
                    />
                </div>

                <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-4">
                    <h1 className="text-4xl lg:text-5xl font-bold text-white">
                        Hello, I'm <span className="text-amber-500">Yousuf Islam<span>!</span></span>
                    </h1>

                    <div className="flex items-center gap-6">
                        <p className="text-lg lg:text-xl text-gray-300 flex items-center gap-2">
                            LET'S CONNECT <MdKeyboardArrowRight className="text-amber-500 text-3xl pt-1 font-bold" />
                        </p>

                        <div className="flex gap-4 text-white text-lg">
                            <a href="#" className="hover:text-blue-500 transition"><FaFacebookF /></a>
                            <a href="#" className="hover:text-gray-400 transition"><FaGithub /></a>
                            <a href="#" className="hover:text-blue-600 transition"><FaLinkedinIn /></a>
                            <a href="#" className="hover:text-pink-400 transition"><FaDribbble /></a>
                            <a href="#" className="hover:text-pink-600 transition"><FaInstagram /></a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Banner;