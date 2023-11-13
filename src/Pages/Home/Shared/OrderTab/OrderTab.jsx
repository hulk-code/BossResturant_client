import OrderCard from "../OrderCard/OrderCard";


const OrderTab = ({item}) => {
    return (
        <div className="grid lg:grid-cols-3 gap-5">
        {
            item.map(item =><OrderCard
             key={item._id}
             item={item}
             ></OrderCard>)
        }
      </div>
    );
};

export default OrderTab;