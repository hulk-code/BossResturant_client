import { useEffect, useState } from "react";
import Sectiontitle from "../SectionTitle/Sectiontitle";
import ManuItems from "../ManuItems/ManuItems";
import UseManu from "../../../../Component/Hooks/UseManu";


const PopulerManu = () => {
    // const [manu , setManu]=useState([])
    // useEffect( () =>{
    //     fetch('manu.json')
    //     .then(res =>res.json())
    //     .then(data =>{
            
    //         const populerItems=data.filter(item => item.category ==='popular')
    //         setManu(populerItems)
           
    //     })
        
    // },[])

    const [manu]=UseManu()
    console.log(manu)
    const populer=manu.filter(item => item.category ==='popular')
    return (
        <div>
            <Sectiontitle 
            heading='Check it out'
            subHeading='FROM OUR MENU'
            ></Sectiontitle>
            <div className="grid grid-cols-2 gap-6 mb-5">
                {
                    populer.map(item => <ManuItems key={item._id} item={item}></ManuItems>)
                }
            </div>
        </div>
    );
};

export default PopulerManu;