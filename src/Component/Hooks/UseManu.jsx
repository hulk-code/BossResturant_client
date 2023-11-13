import { useEffect, useState } from "react";


const UseManu = () => {
    const [manu , setManu]=useState([])
    const[loading ,setLoading]=useState(false)
    useEffect(() =>{
        fetch('http://localhost:3000/menu')
        .then(res => res.json())
        .then(data =>{
            setManu(data)
            setLoading(false)
        })                                  
        
    },[])
    return [manu ,loading]
};

export default UseManu;