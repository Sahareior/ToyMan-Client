import  { useEffect, useState } from 'react';
import { addTodb } from '../../Tools/Tools';

const AllItems = () => {
    const [data, setData] = useState([])
    useEffect(()=>{
        fetch("http://localhost:5000/items")
        .then(res=>res.json())
        .then(result => setData(result))
    },[])
    const handleCart =(id) =>{
      console.log(id)
      addTodb(id)
    }
    return (
        <div className='w-full text-center mt-12'>
            <h1 className='text-5xl font-bold '>Our Products</h1>
            <p className='font-bole text-cyan-400 text-xl mt-4'>Choose your best product</p>
            <div className='grid mx-auto ml-9 mt-9 gap-6 grid-cols-3'>
            {
                data.map(d=> <div key={d.length} className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                <div className="card-body">
                  <h2 className="card-title">{d.toyName}</h2>
                  <div className='card-actions justify-between'>
                  <h1>${d.price}</h1>
                  <h1>{d.availableQuantity}</h1>
                  </div>
                   <div className="card-actions justify-between">
                    <button onClick={()=>handleCart(d._id)} className='btn btn-secondary'>Add to Cart</button>
                    <button className="btn btn-primary">Buy Now</button>
                  </div>
                </div>
              </div>)
            }
            </div>
        </div>
    );
};

export default AllItems;