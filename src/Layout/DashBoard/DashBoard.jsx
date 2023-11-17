import { FaAd, FaCalendar, FaHome, FaList, FaSearch, FaShoppingCart } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";

const DashBoard = () => {
    return (
        <div className="flex text-bold py-4"> 
            <div className="w-64 min-h-screen bg-orange-400">
             <ul className="menu ">
             <li className="mb-2">
                    <NavLink to='/dashboard/userHome'> <FaHome></FaHome> User Home</NavLink>
                 </li>
                 <li className="mb-2">
                    <NavLink to='/dashboard/reservation'>
                        <FaCalendar></FaCalendar>Reservation
                    </NavLink>
                 </li>
                 <li className="mb-2">
                    <NavLink to='/dashboard/cart'> <FaShoppingCart></FaShoppingCart> My Cart</NavLink>
                 </li>
                 <li className="mb-2">
                    <NavLink to='/dashboard/review'> 
                    <FaAd></FaAd>Review
                    </NavLink>
                 </li>
                 <li className="mb-2">
                    <NavLink to='/dashboard/booking'> 
                    <FaList></FaList>My Booking
                    </NavLink>
                 </li>
                 <div className="divider"></div>
                 <li className="mb-2">
                    <NavLink to='/'> 
                   <FaHome></FaHome>Home
                    </NavLink>
                 </li>
                 <li className="mb-2">
                    <NavLink to='/orders/salad'> 
                   <FaSearch></FaSearch>Order
                    </NavLink>
                 </li>
             </ul>
            </div>
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashBoard;