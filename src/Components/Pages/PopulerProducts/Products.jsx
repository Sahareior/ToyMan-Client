import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('products.json')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  // Helper function to generate star elements
  const generateStars = (rating) => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(<span key={i} className="text-yellow-500">★</span>);
    }
    return stars;
  };

  return (
    <div>
      <h1 className='text-center text-5xl font-bold'>Customer Loves</h1>
      <p className='text-center text-xl mt-5 text-cyan-400'>Popular Products</p>
      <div className="grid grid-cols-4 mt-5 gap-x-6 gap-y-6">
        {products.map(data =>
          <div key={data.length} className="card w-80 bg-base-100 shadow-xl">
            <figure><img src={data.photo} alt="Shoes" /></figure>
            <div className="card-body">
              <h2 className="card-title">
                {data.name}
                <div className="badge badge-secondary">NEW</div>
              </h2>
              <p>{data.price}</p>
              <div className="card-actions justify-end">
                {generateStars(data.stars)}
         
              </div>
            </div>
          </div>
        )}
      </div>
   
    </div>
  );
};

export default Products;
