import Banner from "../Carousel/Banner";
import CategoryFood from "../CategoryFood/CategoryFood";
import PopulerManu from "../Shared/PopulerManu/PopulerManu";

const Home = () => {
    return (
        <div>
           <Banner></Banner> 
           <CategoryFood></CategoryFood>
           <PopulerManu></PopulerManu>
        </div>
    );
};

export default Home;