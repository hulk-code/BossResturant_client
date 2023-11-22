/* eslint-disable react/prop-types */
import {  useContext } from "react";
import { AuthContext } from "../AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {
     const {user ,loading}=useContext(AuthContext)
     const location=useLocation();
     console.log(loading);
     
     if(loading){
        return <progress className="progress w-56"></progress>
     }
     console.log(user);
     if(user){
        return children ;
        
    }

      


    
    
    return <Navigate to='/login' state={{form: location}} replace></Navigate>
};

export default PrivateRoute;