import { FaAd, FaBook, FaCalendar, FaEnvelope, FaHome, FaList, FaSearch, FaShoppingCart, FaUser, FaUtensils } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import UseAdmin from "../../Component/Hooks/UseAdmin";
import UseCart from "../../Component/Hooks/UseCart";

const DashBoard = () => {
   
   const [isAdmin]=UseAdmin();
   const[cart]=UseCart()
    return (
        <div className="flex text-bold py-4"> 
            <div className="w-64 min-h-screen bg-orange-400">
             <ul className="menu ">
              {
               isAdmin?<>
                <li className="mb-2">
                    <NavLink to='/dashboard/adminHome'> <FaHome></FaHome> Admin Home</NavLink>

                 </li>
                 <li className="mb-2">
                    <NavLink to='/dashboard/additems'>
                       <FaUtensils></FaUtensils> add_items
                    </NavLink>
                 </li>
                 <li className="mb-2">
                    <NavLink to='/dashboard/manageitems'> 
                    <FaList></FaList> Manage Items</NavLink>
                 </li>
                 <li className="mb-2">
                    <NavLink to='/dashboard/bookings'> 
                    <FaBook></FaBook> Mnage Booking
                    </NavLink>
                 </li>
                 <li className="mb-2">
                    <NavLink to='/dashboard/alluser'> 
                    <FaUser></FaUser>all_User
                    </NavLink>
                 </li>
               </>:
               <>
               <li className="mb-2">
                    <NavLink to='/dashboard/userHome'> <FaHome></FaHome> User Home</NavLink>
                 </li>
                 <li className="mb-2">
                    <NavLink to='/dashboard/reservation'>
                        <FaCalendar></FaCalendar>Reservation
                    </NavLink>
                 </li>
                 <li className="mb-2">
                    <NavLink to='/dashboard/cart'> <FaShoppingCart></FaShoppingCart> My Cart  ({cart.length})</NavLink>
                 </li>
                 <li className="mb-2">
                    <NavLink to='/dashboard/review'> 
                    <FaAd></FaAd>Review
                    </NavLink>
                 </li>
                 <li className="mb-2">
                    <NavLink to='/dashboard/paymenthistory'> 

                    <FaList></FaList>Payment History
                    </NavLink>
                 </li></>

               
              }
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
                 <li className="mb-2">
                    <NavLink to='/orders/contact'> 
                  <FaEnvelope></FaEnvelope> Contact
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