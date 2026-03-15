import { Outlet } from "react-router";
import NavBar from "../common/NavBar";
import Footer from "../common/Footer";
import Banner from "../components/Banner";
import background_img from "../assets/background-img.jpg";

const MainLayout = () => {
    return (
        <div>
            <div className="banner-section relative bg-fuchsia-950">
                <img
                    src={background_img}
                    className="absolute inset-0 w-full h-full object-cover opacity-5"
                    alt="programmer-background-image"
                />
                <nav className="relative z-20">
                    <NavBar />
                </nav>
                <div className="banner relative z-20">
                    <Banner />
                </div>
            </div>

            <main>
                <Outlet />
            </main>

            <footer>
                <Footer />
            </footer>

        </div>
    );
};

export default MainLayout;