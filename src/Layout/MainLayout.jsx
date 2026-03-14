import { Outlet } from "react-router";
import NavBar from "../common/NavBar";
import Footer from "../common/Footer";

const MainLayout = () => {
    return (
        <div>
            <nav>
                <NavBar></NavBar>
            </nav>
            <main>
                <Outlet></Outlet>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default MainLayout;