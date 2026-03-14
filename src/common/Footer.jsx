import { FaGithub, FaLinkedin, FaFacebook, FaEnvelope, FaHeart } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-slate-300">
            <div className="footer sm:footer-horizontal items-center p-4 max-w-6xl mx-auto w-full">
                <aside className="grid-flow-col items-center">
                    <p>Copyright © {new Date().getFullYear()} <span className="text-white font-semibold">SufX</span> - All rights reserved</p>
                </aside>
                <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end text-2xl">
                    <a
                        href="https://github.com/Yousuf7900"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white transition-colors"
                        aria-label="GitHub"
                    >
                        <FaGithub />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/yousuf7900/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-400 transition-colors"
                        aria-label="LinkedIn"
                    >
                        <FaLinkedin />
                    </a>
                    <a
                        href="mailto:yousufislam7900@gmail.com"
                        className="hover:text-red-400 transition-colors"
                        aria-label="Email"
                    >
                        <FaEnvelope />
                    </a>
                    <a
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-500 transition-colors"
                        aria-label="Facebook"
                    >
                        <FaFacebook />
                    </a>
                </nav>
            </div>
            <div className="text-center pb-4 text-sm border-t border-slate-700 pt-4 mt-2">
                <p className="flex items-center justify-center">
                    Developed with <FaHeart className="text-red-500 mx-1 animate-pulse" /> by
                    <a
                        href="https://www.linkedin.com/in/yousuf7900/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-1 text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
                    >
                        Yousuf Islam
                    </a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;