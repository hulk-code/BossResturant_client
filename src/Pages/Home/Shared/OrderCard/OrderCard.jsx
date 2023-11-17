/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../../../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import UseAxiosSecure from "../../../../Component/Hooks/UseAxiosSecure";
import UseCart from "../../../../Component/Hooks/UseCart";



const OrderCard = ({item}) => {
    const {name ,image,price ,recipe,_id}=item;
    const {user}=useContext(AuthContext)
    const[,refetch]=UseCart()
    const nevigate=useNavigate()
    const location=useLocation();
    const axiosScure=UseAxiosSecure()
    const handelAddToCart=()=>{
      if(user && user.email){
        // console.log(user.email ,food);
        const cartItem={
          manuId :_id ,
          email :user.email,
          name,
          image,
          price
        }
        axiosScure.post('/cart' , cartItem)
        .then(res =>{
          console.log(res.data)
          if(res.data.insertedId){
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: ` ${name}Your work has been saved`,
              showConfirmButton: false,
              timer: 1500
            });
            refetch();
          }
        })
      }
      else{
        
        Swal.fire({
          title: "Login",
          text: "Login!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, Login!"
        }).then((result) => {
          if (result.isConfirmed) {
           nevigate('/login', {state: {form:location}})
          }
        });
      }
    }
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={image} alt="Shoes" /></figure>
  <p className= " bg-slate-700 text-white absolute mt-5 mr-3 right-0 px-2">{price}</p>
  <div className="card-body text-center">
    <h2 className=" font-bold text-lg">{name}</h2>
    <p>{recipe}</p>
    <div className="card-actions justify-center">
      <button onClick={() =>handelAddToCart(item)} className="btn btn-outline border-0 border-b-4 mt-4 ">Add_to_Cart</button>
    </div>
  </div>
</div>
    );
};

export default OrderCard;

