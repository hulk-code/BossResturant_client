import { Outlet } from "react-router-dom";
import Navber from "../Pages/Home/Shared/Navber/Navber";
import Footer from "../Pages/Home/Shared/Footer/Footer";

const Main = () => {
    return (
        <div>
            <Navber></Navber>
           <Outlet></Outlet> 
           <Footer></Footer>
        </div>
    );
};

export default Main;