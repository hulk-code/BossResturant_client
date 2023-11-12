

const ManuItems = ({item}) => {
    console.log(item)
    const {name ,image,price ,recipe}=item
    return (
        <div>
            <div className="flex space-x-4">
                <img className="w-[100px]" style={{borderRadius:'0 200px 200px 200px 200px'}} src={image} alt="" />
                <div>
                <h1>{name}</h1>
                <p>{recipe}</p>
                
            </div>
            <p className="text-yellow-500">${price}</p>
            </div>
          
        </div>
    );
};

export default ManuItems;