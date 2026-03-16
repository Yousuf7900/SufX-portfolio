import { MdKeyboardArrowRight } from "react-icons/md";
import { FaFacebookF, FaTwitter, FaDribbble, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import myImg from "../assets/Yousuf.jpg";

const MyAbout = () => {
    return (
        <section id="about" className="w-full bg-gray-100 py-24 px-6">
            <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

                <div className="flex flex-col gap-6">

                    <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 tracking-wide">
                        WHO AM I?
                    </h1>

                    <h3 className="text-xl lg:text-2xl font-semibold text-gray-700">
                        I'm <span className="text-indigo-600">Yousuful Islam</span>, 
                        a Web Developer & Designer
                    </h3>

                    <p className="text-gray-600 leading-relaxed">
                        I specialize in building modern, responsive, and user-focused web
                        applications. My goal is to craft clean digital experiences that
                        balance performance, usability, and aesthetics. I enjoy solving
                        complex problems and turning ideas into elegant web solutions.
                    </p>

                    <div className="flex items-center gap-6 pt-2">

                        <div className="flex items-center gap-2 text-gray-700 text-lg font-medium">
                            Connect with me
                            <MdKeyboardArrowRight className="text-indigo-600 text-2xl" />
                        </div>

                        <div className="flex gap-4 text-gray-600 text-lg">
                            <a href="#" className="hover:text-blue-600 transition"><FaFacebookF /></a>
                            <a href="#" className="hover:text-sky-500 transition"><FaTwitter /></a>
                            <a href="#" className="hover:text-pink-500 transition"><FaDribbble /></a>
                            <a href="#" className="hover:text-blue-700 transition"><FaLinkedinIn /></a>
                            <a href="#" className="hover:text-pink-600 transition"><FaInstagram /></a>
                        </div>

                    </div>

                </div>

                <div className="flex justify-center lg:justify-end">

                    <div className="relative group">

                        <img
                            src={myImg}
                            alt="Yousuful Islam"
                            className="w-72 lg:w-80 rounded-2xl shadow-2xl object-cover
                            transition-transform duration-500 group-hover:-translate-y-3"
                        />

                        <div className="absolute -z-10 top-6 left-6 w-full h-full 
                        bg-indigo-200 rounded-2xl blur-xl opacity-60"></div>

                    </div>

                </div>

            </div>
        </section>
    );
};

export default MyAbout;