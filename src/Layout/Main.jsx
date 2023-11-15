import { Outlet, useLocation } from "react-router-dom";
import Navber from "../Pages/Home/Shared/Navber/Navber";
import Footer from "../Pages/Home/Shared/Footer/Footer";

const Main = () => {
    const location=useLocation()
    console.log(location);
    const noNavNoFoot=location.pathname.includes('login')
    return (
        <div>
           { noNavNoFoot|| <Navber></Navber>}
           <Outlet></Outlet> 
          {noNavNoFoot|| <Footer></Footer>}
        </div>
    );
};

export default Main;