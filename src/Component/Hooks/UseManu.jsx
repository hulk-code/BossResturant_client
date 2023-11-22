import { useQuery } from "@tanstack/react-query";

import UseaxiosUser from "./UseaxiosUser";


const UseManu = () => {
    const axiosPublic=UseaxiosUser()
    // const [manu , setManu]=useState([])
    // const[loading ,setLoading]=useState(false)
    // useEffect(() =>{
    //     fetch('http://localhost:3000/menu')
    //     .then(res => res.json())
    //     .then(data =>{
    //         setManu(data)
    //         setLoading(false)
    //     })                                  
        
    // },[])
    const {data: manu = [], isPending: loading, refetch} = useQuery({
        queryKey: ['manu'], 
        queryFn: async() =>{
            const res = await axiosPublic.get('/menu');
            return res.data;
        }
    })

    return [manu ,loading ,refetch]
};

export default UseManu;