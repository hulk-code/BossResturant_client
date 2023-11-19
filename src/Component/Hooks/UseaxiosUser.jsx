import axios from "axios";

const axiosPublic=axios.create({
    baseURL:"http://localhost:3000"
})

const UseaxiosUser = () => {
    return axiosPublic;
    
};

export default UseaxiosUser;