import { FaTrashAlt } from "react-icons/fa";
import UseCart from "../../../Component/Hooks/UseCart";
import Swal from "sweetalert2";
import UseAxiosSecure from "../../../Component/Hooks/UseAxiosSecure";
import { Link } from "react-router-dom";

const Cart = () => {
    const [cart , refetch] = UseCart()
    const axiosSecure=UseAxiosSecure()
    const totalPrice = cart.reduce((total, item) => total + item.price, 0)
    console.log(cart);
    const handledelete= (id)=>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
           
            axiosSecure.delete(`/cart/${id}`)
            .then(res =>{
                if(res.data.deletedCount >0){
                    refetch()
                      Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
                }
            })

            }
          });
    }
    return (
        <div>
            <div className="flex space-x-28">
                <h2 className="text-6xl">Items:{cart.length}</h2>
                <h2 className="text-6xl">Items:{totalPrice}</h2>
                {cart.length ? <Link to="/dashboard/payment">
                    <button className="btn btn-primary">Pay</button>
                </Link>:
                <button disabled className="btn btn-primary">Pay</button>
                }

            </div>
            <div>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
         #
        </th>
        <th>Image</th>
        <th>Name</th>
        <th>Price</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        cart.map((item ,index ) => <tr key={item._id}>
            <th>
              {/* <label>
                <input type="checkbox" className="checkbox" />
              </label> */}
              {index+1}
            </th>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={item.image} alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
                <div>
                  <div className="font-bold"></div>
                 
                </div>
              </div>
            </td>
            <td>
            {item.name}
              
            </td>
            <td>{item.price}</td>
            <th>
              <button onClick={() => handledelete(item._id)} className="btn btn-ghost btn-xs text-2xl"><FaTrashAlt></FaTrashAlt></button>
            </th>
          </tr>)
      }
      
     
     
     
    </tbody>
   
    
  </table>
</div>
            </div>
        </div>

    );
}

export default Cart;


