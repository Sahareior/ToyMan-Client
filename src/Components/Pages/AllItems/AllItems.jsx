import React, { useEffect, useState } from 'react';

const AllItems = () => {
    const [data, setData] = useState([])
    useEffect(()=>{
        fetch("http://localhost:5000/items")
        .then(res=>res.json())
        .then(result => setData(result))
    },[])
    return (
        <div className='w-full text-center mt-12'>
            <h1 className='text-5xl font-bold '>Our Products</h1>
            <div className='grid mx-auto ml-9 mt-9 gap-6 grid-cols-3'>
            {
                data.map(d=> <div key={d.length} className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                <div className="card-body">
                  <h2 className="card-title">{d.toyName}</h2>
                  <p className='font-bold'>Category: <span className='text-red-600'>{d.subcategory}</span></p>
                  <div className="card-actions justify-between">
                    <h1>${d.price}</h1>
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