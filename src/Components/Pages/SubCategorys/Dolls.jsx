import React, { useContext, useEffect, useState } from 'react';
import { addTodb } from '../../Tools/Tools';
import {  FaShoppingCart } from 'react-icons/fa';
import { AuthContext } from '../../Provider/AuthProvider';

const Dolls = () => {
  const {cart,setCart} = useContext(AuthContext)
    const [data, setData] = useState([])
    useEffect(()=>{
        fetch("https://hope-nine.vercel.app/items?subcategory=dolls")
        .then(res=>res.json())
        .then(result => setData(result))
    },[])
    const handleCart =(d) =>{
      const data = [...cart,d]
      setCart(data)
      
      addTodb(d._id)
    }
    const generateStars = (rating) => {
      const stars = [];
      for (let i = 0; i < rating; i++) {
        stars.push(
          <span key={i} className="text-yellow-500">
            ★
          </span>
        );
      }
      return stars;
    };
    return (
        <div>
              <div>
      <div className="grid mx-auto ml-9 mt-9 justify-between gap-6 md:grid-cols-3">
        {data.map((d) => (
     <div data-aos="zoom-in" key={d.length} className="gap-y-3 flex justify-between card card-bordered w-96 bg-base-100 shadow-xl" style={{ height: '100%' }}>

            <figure>
            <img src={d.image} alt="Shoes" style={{ width: '100%', height: '350px', objectFit: 'cover' }} />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{d.toyName}</h2>
              <div className="card-actions ">
                <h1 className="font-bold">${d.price}</h1>
                <h1 className='ml-44'>{generateStars(d.rating)}</h1>
              </div>
              <div className="card-actions justify-between">
                <button
                  onClick={() => handleCart(d)}
                  className="btn btn-success"
                >
                  <FaShoppingCart />{" "}
                </button>
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    
    </div>
        </div>
    );
};

export default Dolls;