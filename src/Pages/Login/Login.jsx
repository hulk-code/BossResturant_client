import { useContext, useEffect,  useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../Provider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';
import SocialLogin from '../../Component/SocialLogin/SocialLogin';

const Login = () => {
    
    const [disabled ,setDisabled]=useState(true)
    const {signIn}=useContext(AuthContext)
    const navigate=useNavigate()
    const location=useLocation()
    const from=location.state?.form?.pathname ||"/"
     console.log(from);
    useEffect(() =>{
        loadCaptchaEnginge(6); 
    },[])
    const handelLogin= e =>{
        e.preventDefault()
        const form=e.target;
        console.log(form);
        const email=form.email.value
        const password=form.password.value
        
        console.log(password,email);
        signIn(email ,password)
        .then(result=>{
          const user=result.user
          console.log(user);
          Swal.fire({
            title: "Log In SuccessFul",
            showClass: {
              popup: `
                animate__animated
                animate__fadeInUp
                animate__faster
              `
            },
            hideClass: {
              popup: `
                animate__animated
                animate__fadeOutDown
                animate__faster
              `
            }
          });
          navigate(from,{replace:true})
        })
    }
    const handleValidateCaptcha= (e)=>{
        const user_value=e.target.value
        console.log(user_value)
        if(validateCaptcha(user_value)){
            setDisabled(false)
        }
    }
    return (
     <>
      <Helmet>
      <title>Bistro Boss || LogIn</title>
    
    </Helmet>
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <div className="text-center w-1/2 lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6 ">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handelLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name='email' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name='password' className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control">
          <label className="label">
          <LoadCanvasTemplate />
          </label>
          <input type="text" onBlur={handleValidateCaptcha}  placeholder="type capcha" name='capcha' className="input input-bordered" required />
         
        </div>
        <div className="form-control mt-6">
          <input disabled={disabled} className="btn btn-primary" type="submit" value="Login" />
        
        </div>
        <SocialLogin></SocialLogin>
      </form>
      <p className='text-center'>
        <small>NEW HERE? <Link className='text-red-700 font-bold text-sm' to='/signup'>Register Here</Link></small>
      </p>
    </div>
  </div>
</div>
</>
    );
};

export default Login;