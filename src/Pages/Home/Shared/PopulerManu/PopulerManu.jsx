import { useEffect, useState } from "react";
import Sectiontitle from "../SectionTitle/Sectiontitle";
import ManuItems from "../ManuItems/ManuItems";


const PopulerManu = () => {
    const [manu , setManu]=useState([])
    useEffect( () =>{
        fetch('manu.json')
        .then(res =>res.json())
        .then(data =>{
            
            const populerItems=data.filter(item => item.category ==='popular')
            setManu(populerItems)
           
        })
        
    },[])
    return (
        <div>
            <Sectiontitle 
            heading='Check it out'
            subHeading='FROM OUR MENU'
            ></Sectiontitle>
            <div className="grid grid-cols-2 gap-6 mb-5">
                {
                    manu.map(item => <ManuItems key={item._id} item={item}></ManuItems>)
                }
            </div>
        </div>
    );
};

export default PopulerManu;