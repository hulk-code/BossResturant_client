import { useContext } from "react";
import UseAdmin from "../../Component/Hooks/UseAdmin";
import { AuthContext } from "../../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const AdminRoute = ({children}) => {
    const [isAdmin ,adminLoading]=UseAdmin();

    const {user ,loading}=useContext(AuthContext)
    const location=useLocation();
    
    
    if(loading || adminLoading){
       return <progress className="progress w-56"></progress>
    }
    
    if(user && isAdmin){
       return children ;
       
   }

     


   
   
   return <Navigate to='/login' state={{form: location}} replace></Navigate>
};

export default AdminRoute;