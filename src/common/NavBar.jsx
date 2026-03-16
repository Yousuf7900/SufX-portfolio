import { IoMenu } from "react-icons/io5";

const NavBar = () => {
    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        section?.scrollIntoView({ behavior: "smooth" });
    }

    const commonLinks = (
        <>
            <li><button onClick={() => scrollToSection("about")}>About</button></li>
            <li><button onClick={() => scrollToSection("services")}>Services</button></li>
            <li><button onClick={() => scrollToSection("portfolio")}>Portfolio</button></li>
            <li><button onClick={() => scrollToSection("clients")}>Clients</button></li>
            <li><button onClick={() => scrollToSection("work")}>Work</button></li>
            <li><button onClick={() => scrollToSection("stats")}>Statistics</button></li>
            <li><button onClick={() => scrollToSection("blog")}>Blog</button></li>
            <li><button onClick={() => scrollToSection("contact")}>Contact</button></li>
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