import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../../Provider/AuthProvider";
import { FaShoppingCart } from "react-icons/fa";
import UseCart from "../../../../Component/Hooks/UseCart";
import UseAdmin from "../../../../Component/Hooks/UseAdmin";


const Navber = () => {
  const {user ,logout}=useContext(AuthContext)
  const [cart]=UseCart()
  const[isAdmin]=UseAdmin();
  const handleLogOut=()=>{
    logout()
    .then(()=>{})
    .catch(error =>console.log(error))
}
  const navLink=<>
   <li><NavLink to='/'>Home</NavLink> </li>
   <li><NavLink to='/manu'>manu</NavLink> </li>
  
   <li><NavLink to='/orders/salad'>Order_Food</NavLink> </li>
   <li><NavLink to='/secrat'>Secrat</NavLink> </li>
   {
            user && isAdmin && <li><Link to="/dashboard/adminHome">Dashboard</Link></li>
        }
        {
            user && !isAdmin && <li><Link to="/dashboard/userHome">Dashboard</Link></li>
        }
  
   <li > <Link to='/dashboard/cart'>
   <button className="btn">
  <FaShoppingCart></FaShoppingCart>
  <div className="badge badge-secondary">+{cart.length}</div>
</button>
   </Link></li>
 
   {
          user?<> <span className="mr-3">{user?.displayName
          }</span>
          <div className="avatar">
  <div className="w-[50px] rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    <img src={user?.photoURL
          } />
  </div>
</div> 
          <button onClick={handleLogOut} className="btn btn-ghost ">LogOut</button></> :<> <li><NavLink to='/login'>Login</NavLink> </li></>
   }
   
  </>


    return (
        <div>
            <div className="navbar fixed z-10 bg-opacity-25  bg-black text-white max-w-7xl mx-auto">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
       {navLink}
        
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {navLink}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Button</a>
  </div>
</div>
        </div>
    );
};

export default Navber;