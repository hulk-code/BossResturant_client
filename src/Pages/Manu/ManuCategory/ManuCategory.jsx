import { Link } from "react-router-dom";
import Cover from "../../Home/Shared/Cover/Cover";
import ManuItems from "../../Home/Shared/ManuItems/ManuItems";


const ManuCategory = ({items ,img,title}) => {
    return (
        <div className="pt-10">
            {
                title && <Cover 
                img={img}
                title={title}></Cover>
            }
             <div className="grid grid-cols-2 gap-6 mb-10 mt-10">
                {
                    items.map(item => <ManuItems key={item._id} item={item}></ManuItems>)
                }
            </div>
           <Link to={`/orders/${title}`}> <button className="btn btn-outline border-0 border-b-4 mt-4 ">Make_Order</button></Link>
        </div>
    );
};

export default ManuCategory;