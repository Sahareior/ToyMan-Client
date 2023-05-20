import  { useEffect, useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const Cart = () => {
    const [data,setData] = useState([])
  const {cartProductsLoader} = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      const result = await cartProductsLoader();
      setData(result);
    };

    fetchData();
  }, []);
console.log(data)
    return (
        <div className='mt-9 w-full'>
            <h1 className='text-5xl text-center font-bold'>You have added</h1>
          <div className=' grid grid-cols-2 mt-5 justify-items-center gap-x-3 gap-y-6'>
            {
                data.map(d=> <div key={d._id} className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                  <img src={d.image} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">{d.toyName}</h2>
                  <p>Total: {d.quantity}</p>
                  <div className="card-actions">
                    <button className="btn btn-primary">Buy Now</button>
                  </div>
                </div>
              </div>)
            }
          </div>
        </div>
    );
};

export default Cart;