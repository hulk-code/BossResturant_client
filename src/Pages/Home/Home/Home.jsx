import { Helmet } from "react-helmet-async";
import Banner from "../Carousel/Banner";
import CategoryFood from "../CategoryFood/CategoryFood";
import FeaturedManu from "../FeaturedManu/FeaturedManu";
import Reviews from "../Reviews/Reviews";
import PopulerManu from "../Shared/PopulerManu/PopulerManu";

const Home = () => {
    return (
        <div>
            <Helmet>
        <title>Bistro Boss || Home</title>
      
      </Helmet>
           <Banner></Banner> 
           <CategoryFood></CategoryFood>
           <PopulerManu></PopulerManu>
           <FeaturedManu></FeaturedManu>
           <Reviews></Reviews>
        </div>
    );
};

export default Home;