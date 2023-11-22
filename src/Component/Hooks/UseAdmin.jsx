import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import UseAxiosSecure from "./UseAxiosSecure";
import { useQuery } from "@tanstack/react-query";


const UseAdmin = () => {
    const {user}=useContext(AuthContext);
    const axiosScure=UseAxiosSecure()
    const{ data :isAdmin ,isLoading:adminLoading}=useQuery({
        queryKey:[user?.email,"isAdmin"],
        queryFn:async ()=>{
            const res=await axiosScure.get(`user/admin/${user.email}`)
            console.log(res.data);
            return res.data?.admin;
        }
    })
    return [isAdmin ,adminLoading]
};

export default UseAdmin;