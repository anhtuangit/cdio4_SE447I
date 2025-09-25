import { Outlet } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";

const Layout = () => {
    return (
        <div className="flex-col h-screen w-full gap-4">
            <Header />
            {<Outlet />}
            <Footer />
        </div>

    );
}

export default Layout;