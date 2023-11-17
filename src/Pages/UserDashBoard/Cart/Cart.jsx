import { FaTrashAlt } from "react-icons/fa";
import UseCart from "../../../Component/Hooks/UseCart";

const Cart = () => {
    const [cart] = UseCart()
    const totalPrice = cart.reduce((total, item) => total + item.price, 0)
    return (
        <div>
            <div className="flex space-x-28">
                <h2 className="text-6xl">Items:{cart.length}</h2>
                <h2 className="text-6xl">Items:{totalPrice}</h2>
                <button className="btn btn-accent text-3xl font-bold"> pay</button>

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
              <button className="btn btn-ghost btn-xs text-3xl"><FaTrashAlt></FaTrashAlt></button>
            </th>
          </tr>)
      }
      
     
     
     
    </tbody>
   
    
  </table>
</div>
            </div>
        </div>

    );
};

export default Cart;