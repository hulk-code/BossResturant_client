import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "./UseAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";



const UseCart = () => {
    const axiosScure=UseAxiosSecure()
    const {user}=useContext(AuthContext)
  
    const { refetch,data: cart=[]}=useQuery({
        queryKey:['cart' ,user?.email],
        queryFn: async () =>{
            const res=await axiosScure.get(`/cart?email=${user.email}`) 
            return res.data
        }
        })
        return[cart ,refetch]
};

export default UseCart;