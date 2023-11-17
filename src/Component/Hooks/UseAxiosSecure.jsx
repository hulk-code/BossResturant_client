import axios from "axios";

 const axiosScure=axios.create({
    baseURL:'http://localhost:3000'
})
const UseAxiosSecure = () => {
    return axiosScure
};

export default UseAxiosSecure;