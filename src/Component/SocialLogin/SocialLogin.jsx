import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../Provider/AuthProvider";
import UseaxiosUser from "../Hooks/UseaxiosUser";
import { useNavigate } from "react-router-dom";




const SocialLogin = () => {
    const {googleSignIn}=useContext(AuthContext)
    const axiosPublic=UseaxiosUser()
    const navigate=useNavigate()
    const handleGoogleSignIn=()=>{
        googleSignIn()
        .then(result =>{
            console.log(result.user)
            const userInfo ={
                email: result.user?.email,
                name: result.user?.displayName
            }
            axiosPublic.post('/user',userInfo)
            .then(res =>{
                console.log(res.data);

            navigate('/')
            })
        })
    }
    return (
        <div>
                <div>
                    <button onClick={handleGoogleSignIn} className="btn btn-accent w-full mx-auto text-bold">
                    <FaGoogle></FaGoogle>Google
                    </button>
              
                </div>
        </div>
    );
};

export default SocialLogin;
