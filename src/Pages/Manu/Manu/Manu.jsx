import { Helmet } from "react-helmet-async";
import Cover from "../../Home/Shared/Cover/Cover";
import img from '../../../assets/menu/banner3.jpg'
import img1 from '../../../assets/menu/salad-bg.jpg'
import img2 from '../../../assets/menu/dessert-bg.jpeg'
import img3 from '../../../assets/menu/soup-bg.jpg'
import img4 from '../../../assets/menu/pizza-bg.jpg'
import img5 from '../../../assets/menu/dessert-bg.jpeg'
import UseManu from "../../../Component/Hooks/UseManu";
import Sectiontitle from "../../Home/Shared/SectionTitle/Sectiontitle";
import ManuCategory from "../ManuCategory/ManuCategory";

const Manu = () => {
    const [manu]=UseManu()
    const offered=manu.filter(item => item.category ==='offered')
    const salad=manu.filter(item => item.category ==='salad')
    const drinks=manu.filter(item => item.category ==='drinks')
    const soup=manu.filter(item => item.category ==='soup')
    const pizza=manu.filter(item => item.category ==='pizza')
    const dessert=manu.filter(item => item.category ==='dessert')
    return (
        <div>
              <Helmet>
        <title>Bistro Boss || Manu</title>
      
      </Helmet>
       <Cover 
       img={img}
       title='OUR MENU'></Cover>
         <Sectiontitle heading="dont miss" subHeading='today Offer'></Sectiontitle>
         <ManuCategory items={offered}></ManuCategory>
         <ManuCategory 
         img={img1}
         items={salad}
          title={'salad'}

         ></ManuCategory>
         <ManuCategory 
         img={img2}
         items={drinks}
          title={'drinks'}

         ></ManuCategory>
         <ManuCategory 
         img={img3}
         items={soup}
          title={'soup'}

         ></ManuCategory>
         <ManuCategory 
         img={img4}
         items={pizza}
          title={'pizza'}

         ></ManuCategory>
         <ManuCategory 
         img={img5}
         items={dessert}
          title={'dessert'}

         ></ManuCategory>

        </div>
    );
};

export default Manu;