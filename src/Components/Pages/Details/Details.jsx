import { FaCoins } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";


const Details = () => {
    const data = useLoaderData()
    console.log(data)
    return (
        <div className="flex justify-center items-center">
           <div className="card mt-20 w-1/2 bg-base-100 shadow-xl">
  <figure><img src={data.image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title text-2xl">{data.toyName}</h2>
    <h1 className="text-bold text-xl"><span className="text-secondary-focus">Added by: {data.name}</span></h1>
    <h1 className="text-bold text-xl"><span className="text-secondary-focus">Price: ${data.price}</span></h1>
    <h1 className="text-bold text-xl"><span className="text-secondary-focus">Rating: {data.rating}</span></h1>
    <h1 className="text-bold text-xl"><span className="text-secondary-focus">Available Quantity: {data.availableQuantity}</span></h1>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Details;