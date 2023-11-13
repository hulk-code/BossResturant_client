

const OrderCard = ({item}) => {
    const {name ,image,price ,recipe}=item
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={image} alt="Shoes" /></figure>
  <p className= " bg-slate-700 text-white absolute mt-5 mr-3 right-0 px-2">{price}</p>
  <div className="card-body text-center">
    <h2 className=" font-bold text-lg">{name}</h2>
    <p>{recipe}</p>
    <div className="card-actions justify-center">
      <button className="btn btn-primary">Add_to_Cart</button>
    </div>
  </div>
</div>
    );
};

export default OrderCard;

