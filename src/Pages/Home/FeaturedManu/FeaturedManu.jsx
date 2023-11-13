import Sectiontitle from "../Shared/SectionTitle/Sectiontitle";
import img from '../../../assets/home/featured.jpg'
import './Featured.css'

const FeaturedManu = () => {
    return (
        <div className="bg bg-fixed text-white ">
          <div className="pt-8">
          <Sectiontitle 
            heading='Check it out'
            subHeading='FROM OUR MENU'>
                
 
            </Sectiontitle>
          </div>
            <div className="flex items-center space-x-4 w-1/2 mx-auto py-20 px- bg-slate-700 bg-opacity-25">
                    <div>
                        <img src={img} alt="" />
                    </div>
                    <div >
                      <p className="text-xl">March 20, 2023</p>
                      <p className="text-2xl">WHERE CAN I GET SOME?</p>
                      <p>orem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                      <button className="btn btn-outline border-0 border-b-4 mt-4 ">Read_More</button>
                    </div>
                </div>
        </div>
    );
};

export default FeaturedManu;