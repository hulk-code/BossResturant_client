import { Helmet } from "react-helmet-async";
import Cover from "../../Home/Shared/Cover/Cover";
import img from '../../../assets/menu/banner3.jpg'

const Manu = () => {
    return (
        <div>
              <Helmet>
        <title>Bistro Boss || Manu</title>
      
      </Helmet>
       <Cover 
       img={img}
       title='OUR MENU'></Cover>
        </div>
    );
};

export default Manu;