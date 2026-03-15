import { IoMenu } from "react-icons/io5";
import { NavLink } from "react-router";

const NavBar = () => {

    const navLinkStyle = ({ isActive }) =>
        `relative font-medium transition-all duration-300 
        ${isActive ? "text-blue-400" : "text-white hover:text-blue-400"}`;

    const commonLinks = (
        <>
            <li><NavLink to="/about" className={navLinkStyle}>About</NavLink></li>
            <li><NavLink to="/skills" className={navLinkStyle}>Services</NavLink></li>
            <li><NavLink to="/services" className={navLinkStyle}>Portfolio</NavLink></li>
            <li><NavLink to="/projects" className={navLinkStyle}>Clients</NavLink></li>
            <li><NavLink to="/work" className={navLinkStyle}>Work</NavLink></li>
            <li><NavLink to="/stats" className={navLinkStyle}>Statistics</NavLink></li>
            <li><NavLink to="/blog" className={navLinkStyle}>Blog</NavLink></li>
            <li><NavLink to="/contact" className={navLinkStyle}>Contact</NavLink></li>
        </>
    );

    return (
        <div className="sticky top-0 z-50">

            <div className="navbar max-w-7xl mx-auto px-6 text-white">

                <div className="flex-1">
                    <a
                        href="/"
                        className="uncial-antiqua-regular text-3xl tracking-[0.28em] flex items-center group transition-all duration-300"
                    >
                        <span className="text-neutral-100 uppercase group-hover:text-white transition-colors">
                            SUF
                        </span>

                        <span className="ml-1 text-amber-400 group-hover:text-amber-300 transition-colors">
                            X
                        </span>
                    </a>
                </div>

                <div className="hidden lg:flex">
                    <ul className="menu menu-horizontal gap-6 text-sm">
                        {commonLinks}
                    </ul>
                </div>

                <div className="lg:hidden dropdown dropdown-end">

                    <div
                        tabIndex={0}
                        role="button"
                        className="p-2 rounded-md text-white hover:bg-white/10 transition duration-200"
                    >
                        <IoMenu size={28} />
                    </div>

                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 p-3 shadow-xl text-black rounded-xl w-56 space-y-1"
                    >
                        {commonLinks}
                    </ul>

                </div>

            </div>

        </div>
    );
};

export default NavBar;