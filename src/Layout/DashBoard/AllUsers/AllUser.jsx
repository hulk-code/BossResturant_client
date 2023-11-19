import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../../../Component/Hooks/UseAxiosSecure";
import { FaTrashAlt, FaUser } from "react-icons/fa";
import Swal from "sweetalert2";

const AllUser = () => {
const axiosSecure=UseAxiosSecure();
const{data : users=[] ,refetch}=useQuery({
    queryKey:['users'],
    queryFn:async () =>{
        const res=await axiosSecure.get('/user');
        return res.data;
    }
})
 const handleMakeUser=user=>{
    axiosSecure.patch(`/user/admin/${user._id}`)
    .then(res =>{
        console.log(res.data)
        if(res.data.modifiedCount >0){
            refetch()
            Swal.fire({
                position: "top-end",
                icon: "success",
                title:`${user.name} admin created`,
                showConfirmButton: false,
                timer: 1500
              });
        }
    })
 }
        const handledeleteUser=user=>{
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
               
                axiosSecure.delete(`/user/${user._id}`)
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
           <div className="flex justify-evenly my-4">
           <div className="text-3xl">All User</div>
            <div className="text-3xl">Total User :{users.length}</div>
           </div>
           <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Roll</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      

      {
        users.map((user , index) => <tr key={user._id} className="bg-base-200">
        <th>{index+1}</th>
        <th>{user.name}</th>
        <td>{user.email}</td>
        <td>
       { user.role ==='admin' ?'admin' :
       
       <button onClick={() => handleMakeUser(user)} className="btn btn-ghost btn-xs text-2xl"><FaUser></FaUser></button>}
        </td>
        <td> <button onClick={() => handledeleteUser(user)} className="btn btn-ghost btn-xs text-2xl"><FaTrashAlt></FaTrashAlt></button></td>
      </tr>)
      }
     
     
    </tbody>
  </table>
</div>
        </div>
    );
};

export default AllUser;