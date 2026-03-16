import { Outlet } from "react-router";
import NavBar from "../common/NavBar";
import Footer from "../common/Footer";
import Banner from "../components/Banner";
import background_img from "../assets/background-img.jpg";
import MyAbout from "../components/MyAbout";
import WhatGoodAt from "../components/WhatGoodAt";
import CheckOutMyPortfolio from "../components/CheckOutMyPortfolio";
import WorkExperienceTimeline from "../components/WorkExperience";
import Stats from "../components/Stats";
import Contact from "../components/Contact";
import Education from "../components/Education";
import Techs from "../components/Techs";
import ScrollToTop from "../components/ScrollUp";

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
            <section id="about">
                <MyAbout></MyAbout>
            </section>
            <section>
                <Education></Education>
            </section>
            <section>
                <Techs></Techs>
            </section>
            <section>
                <WhatGoodAt></WhatGoodAt>
            </section>
            <section>
                <CheckOutMyPortfolio></CheckOutMyPortfolio>
            </section>
            <section id="work">
                <WorkExperienceTimeline></WorkExperienceTimeline>
            </section>
            <section>
                <Stats></Stats>
            </section>
            <section>
                <Contact></Contact>
            </section>
            <section>
                <ScrollToTop></ScrollToTop>
            </section>

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