import { IoMenu } from "react-icons/io5";
import { NavLink } from "react-router";

const NavBar = () => {
    const commonLinks = (
        <>
            <li><NavLink to="/about" className="hover:text-blue-500 font-medium transition-colors">About</NavLink></li>
            <li><NavLink to="/skills" className="hover:text-blue-500 font-medium transition-colors">Services</NavLink></li>
            <li><NavLink to="/services" className="hover:text-blue-500 font-medium transition-colors">Portfolio</NavLink></li>
            <li><NavLink to="/projects" className="hover:text-blue-500 font-medium transition-colors">Clients</NavLink></li>
            <li><NavLink to="/contact" className="hover:text-blue-500 font-medium transition-colors">Work</NavLink></li>
            <li><NavLink to="/contact" className="hover:text-blue-500 font-medium transition-colors">Statistics</NavLink></li>
            <li><NavLink to="/contact" className="hover:text-blue-500 font-medium transition-colors">Blog</NavLink></li>
            <li><NavLink to="/contact" className="hover:text-blue-500 font-medium transition-colors">Contact</NavLink></li>
        </>
    );

    return (
        <div className="navbar bg-base-100 sticky top-0 z-50 px-4 md:px-8 max-w-9/12 mx-auto">
            <div className="flex-1">
                <a href="/" className="text-3xl font-black tracking-tighter cursor-pointer hover:scale-105 transition-transform duration-300">
                    <span className="bg-linear-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                        Suf
                    </span>
                    <span className="text-base-content">
                        X
                    </span>
                    <span className="text-blue-500">.</span>
                </a>
            </div>
            <div className="flex-none hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-2">
                    {commonLinks}
                </ul>
            </div>
            
       
            <div className="flex-none lg:hidden dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <IoMenu className="text-black font-bold text-4xl" />
                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 gap-2">
                    {commonLinks}
                </ul>
            </div>
        </div>
    );
};

export default NavBar;