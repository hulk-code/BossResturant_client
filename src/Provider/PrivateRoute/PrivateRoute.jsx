import {  useContext } from "react";
import { AuthContext } from "../AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({Children}) => {
     const {user ,loading}=useContext(AuthContext)
     const location=useLocation();
     if(loading){
        return <progress className="progress w-56"></progress>
     }
     
     if(user){
        return Children ;
    }
      


    
    
    return <Navigate to='/login' state={{form:location}} replace></Navigate>
};

export default PrivateRoute;