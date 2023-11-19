import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import UseaxiosUser from "../../Component/Hooks/UseaxiosUser";
import SocialLogin from "../../Component/SocialLogin/SocialLogin";



const SignUp = () => {
  const{CreateUser ,updateUserProfile}=useContext(AuthContext)
  const axiosPublic=UseaxiosUser()
  const navigate=useNavigate()
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm()
      
  const onSubmit = (data) => {
    console.log(data)
    CreateUser(data.email ,data.password)
    .then(Result=>{
      const loggedUser=Result.user;
      console.log(loggedUser);
         updateUserProfile(data.name , data.photoURL)
         .then(() =>{
          const userInfo={
            name:data.name,
            email:data.email
          }
          axiosPublic.post('/user',userInfo)
          .then(res =>{
             if(res.data.insertedId){
              reset()
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your work has been saved",
                showConfirmButton: false,
                timer: 1500
              });
              navigate('/')
             }
          })
             
         })
         .catch(error =>console.log(error))
      
    })
  }

    return (
    <>
      <Helmet>
      <title>Bistro Boss || SignUp</title>
    
    </Helmet>
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">SIGN UP!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSubmit(onSubmit)} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text"  {...register("name" ,{ required: true })} placeholder="name" name='name' className="input input-bordered"  />
          {errors.name && <span className="text-red-500 font-bold text-center">Name is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input type="text"  {...register("photoURL" ,{ required: true })} placeholder="Photo Url"  className="input input-bordered"  />
          {errors.photoURL && <span className="text-red-500 font-bold text-center">photo  is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email"  {...register("email")} placeholder="email" name='email' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password"  {...register("password" , { required: true,
             minLength:6 ,
              maxLength: 20,
              pattern: /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/
              

               })} placeholder="password" className="input input-bordered" required />
          <label className="label">
            {errors.password?.type === "required" && (
        <p role="alert">Password is required</p>
      )}
            {errors.password?.type === "minLength" && (
        <p role="alert">Password Must be 6 charecter</p>
      )}
            {errors.password?.type === "pattern" && (
        <p role="alert">Password Must one Uppercase ,one lowercase,1 number ,@sepcial charecter</p>
      )}

            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <input  className="btn btn-primary" type="submit" value="SignUp" />
         
        </div>
        <SocialLogin></SocialLogin>
      </form>
      <p className='text-center p-4'>
        <small>Already have an account? <Link className='text-red-700 font-bold text-sm ' to='/login'>LogIn</Link></small>
      </p>
    </div>
  </div>
</div>
</>
    );
};

export default SignUp;