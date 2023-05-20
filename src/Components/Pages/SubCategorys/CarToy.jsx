import React, { useContext, useEffect, useState } from 'react';
import {  FaShoppingCart } from 'react-icons/fa';
import { addTodb } from '../../Tools/Tools';
import { AuthContext } from '../../Provider/AuthProvider';

const CarToy = () => {
  const {cart,setCart} = useContext(AuthContext)
    const [data, setData] = useState([])
    useEffect(()=>{
        fetch("http://localhost:5000/items?subcategory=cars")
        .then(res=>res.json())
        .then(result => setData(result))
    },[])
    const handleCart =(d) =>{
      const data = [...cart,d]
      setCart(data)
      
      addTodb(d._id)
    }
    return (
        <div className=''>
              <div className='md:grid mx-auto ml-9 mt-9 gap-6 grid-cols-3'>
            {
                data.map(d=> <div key={d.length} className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={d.image} alt="Shoes" /></figure>
                <div className="card-body">
                  <h2 className="card-title">{d.toyName}</h2>
                  <div className='card-actions justify-between'>
                  <h1>${d.price}</h1>
                  <h1>{d.availableQuantity}</h1>
                  </div>
                   <div className="card-actions justify-between">
                    <button onClick={()=>handleCart(d)} className='btn btn-secondary'>Add to Cart</button>
                    <button className="btn btn-primary">Buy Now</button>
                  </div>
                </div>
              </div>)
            }
            </div>
        </div>
    );
};

export default CarToy;