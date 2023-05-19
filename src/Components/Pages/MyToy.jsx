import React, { useEffect, useState } from 'react';

const MyToy = () => {
  const [data, setData] = useState([]);
  const [clicked,setClicked] = useState({})
  

  useEffect(() => {
    fetch('http://localhost:5000/items?email=sijan@gmail.com')
      .then(res => res.json())
      .then(result => setData(result));
  }, []);

const handleClick=(id)=>{
    setClicked(id)
}


const handleSubmit =(e)=>{
    e.preventDefault()
   const image = e.target.pictureUrl.value  
   const toyName = e.target.name.value  
   const name = e.target.sellerName.value  
   const email = e.target.sellerEmail.value  
   const subcategory = e.target.subCategory.value  
   const price = e.target.price.value  
   const rating = e.target.rating.value  
   const availableQuantity = e.target.quantity.value  
   const description = e.target.description.value 
   const value = {image,name,toyName,email,subcategory,price,rating,availableQuantity,description} 
    
   fetch(`http://localhost:5000/items/${_id}`,{
    method:'PUT',
    headers:{
        'content-type':'application/json'
    },
    body:JSON.stringify(value)
   })
    .then(res=>res.json())
    .then(data=>console.log(data))
    e.target.reset()
}


const {_id,name,toyName,image,email,subcategory,price,rating,availableQuantity,description} = clicked

  return (
    <div className="overflow-x-auto mt-10">
      <table className="table table-compact w-full">
        <thead>
          <tr>
            <th>Name</th>
            <th>Toy Name</th>
            <th>Sub-category</th>
            <th>Price</th>
            <th>Available Quantity</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {   data.map(d => (
            <tr key={d._id}>
              <td>
                <button className="btn btn-circle btn-outline">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </td>
              <td>{d.name}</td>
              <td>{d.toyName}</td>
              <td>{d.subcategory}</td>
              <td>{d.price}</td>
              <td>{d.availableQuantity}</td>
              <td>
              <label htmlFor="my-modal-6" onClick={()=>handleClick(d)} className="btn">Update</label>

              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
        <>
        <input type="checkbox" id="my-modal-6" className="modal-toggle" />
<div className="modal modal-bottom xl:modal-middle">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Congratulations random Internet user!</h3>
    <form onSubmit={handleSubmit} className='text-black'>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block mb-2">Picture URL</label>
            <input
              type="text"
              name="pictureUrl"
                
              defaultValue={image}
              className="w-full rounded border p-2"
              placeholder="Enter Picture URL"
              required
            />
          </div>
          <div>
            <label className="block mb-2">Name</label>
            <input
              type="text"
              name="name"
             defaultValue={toyName}
              className="w-full rounded border p-2"
              placeholder="Enter Name"
              required
            />
          </div>
          <div>
            <label className="block mb-2">Seller Name</label>
            <input
              type="text"
              name="sellerName"
            defaultValue={name}
              className="w-full rounded border p-2"
              placeholder="Enter Seller Name"
            />
          </div>
          <div>
            <label className="block mb-2">Seller Email</label>
            <input
              type="email"
              name="sellerEmail"
            defaultValue={email}
              className="w-full rounded border p-2"
              placeholder="Enter Seller Email"
            />
          </div>
          <div>
            <label className="block mb-2">Sub-category</label>
            <input
              type="text"
              name="subCategory"
            defaultValue={subcategory}
              className="w-full rounded border p-2"
              placeholder="Enter Sub-category"
              required
            />
          </div>
          <div>
            <label className="block mb-2">Price</label>
            <input
              type="number"
              name="price"
             defaultValue={price}
              className="w-full rounded border p-2"
              placeholder="Enter Price"
              required
            />
          </div>
          <div>
            <label className="block mb-2">Rating</label>
            <input
              type="number"
              name="rating"
             defaultValue={rating}
              className="w-full rounded border p-2"
              placeholder="Enter Rating"
              required
            />
          </div>
          <div>
            <label className="block mb-2">Available Quantity</label>
            <input
              type="number"
              name="quantity"
              defaultValue={availableQuantity}
              className="w-full rounded border p-2"
              placeholder="Enter Available Quantity"
              required
            />
          </div>
          <div className="col-span-2">
            <label className="block mb-2">Detail Description</label>
            <textarea
              name="description"
            defaultValue={description}
              className="w-full rounded border p-2"
              placeholder="Enter Detail Description"
              rows={4}
              required
            />
          </div>
        </div>
        <div className="mt-6">
          <button type="submit" className="btn btn-primary">Submit</button>
        </div>
      </form>
    <div className="modal-action">
      <label htmlFor="my-modal-6" className="btn">Yay!</label>
    </div>
  </div>
</div>
        </>
     
    </div>
  );
};

export default MyToy;
