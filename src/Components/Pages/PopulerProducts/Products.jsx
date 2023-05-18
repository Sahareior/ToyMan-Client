import { useEffect, useState } from "react";


const Products = () => {
    const [products, setProducts] = useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res=> res.json())
        .then(data => setProducts(data))
    },[])
    console.log(products)
    return (
        <div>
            <h1 className='text-center text-5xl font-bold'>Customer Loves</h1>
            <p className='text-center text-xl text-cyan-400'>Populer Products</p>
            <div className="grid grid-cols-4 mt-5 gap-7">
                {
                    products.map(data=> 
                        
                        <div key={data.length} className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={data.photo} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      {data.name}
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>{data.price}</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Fashion</div>
      <div className="badge badge-outline">Products</div>
    </div>
  </div>
</div>
                        )
                }
            </div>
        </div>
    );
};

export default Products;