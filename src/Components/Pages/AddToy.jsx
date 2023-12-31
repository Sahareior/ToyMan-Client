import { useContext, useEffect } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';

const AddToy = () => {
  const{user} = useContext(AuthContext)
  useEffect(() => {
    document.title = "ToyMan|AddToy"; 
  }, []);

  
    const handleSubmit =(e)=>{
        e.preventDefault()
       const image = e.target.pictureUrl.value  
       const toyName = e.target.name.value  
       const name = e.target.sellerName.value  
       const email = user.email  
       const subcategory =  e.target.subCategory.value.toLowerCase()
       const price = parseInt(e.target.price.value ) 
       const rating = e.target.rating.value  
       const availableQuantity = e.target.quantity.value  
       const description = e.target.description.value 
       const value = {image,name,toyName,email,subcategory,price,rating,availableQuantity,description} 
        
       fetch('https://hope-nine.vercel.app/items',{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(value)
       })
        .then(res=>res.json())
        .then(data=>{
          if(data.acknowledged){
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Item added Successfully!',
              showConfirmButton: false,
              timer: 1500
            })
          }
        })
        e.target.reset()
    }
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url("https://img.freepik.com/free-photo/top-view-childhood-cancer-awareness-month-background-concepttoys_23-2149499365.jpg?size=626&ext=jpg")` }}>
        <div className="hero-overlay bg-opacity-5"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
          <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-4">Add A Toy</h1>
      <form onSubmit={handleSubmit} className='text-black'>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block mb-2">Picture URL</label>
            <input
              type="text"
              name="pictureUrl"
              
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
          
              className="w-full rounded border p-2"
              placeholder="Enter Seller Name"
            />
          </div>
          <div>
            <label className="block mb-2">Seller Email</label>
            <input
            disabled
              type="email"
              name="sellerEmail"
              value={user.email}
              className="w-full rounded border p-2"
              placeholder="Enter Seller Email"
            />
          </div>
          <div>
            <label className="block mb-2">Sub-category</label>
            <input
              type="text"
              name="subCategory"
            
              className="w-full rounded border p-2"
              placeholder="electronic/dolls/cars "
              required
            />
          </div>
          <div>
            <label className="block mb-2">Price</label>
            <input
              type="number"
              name="price"
             
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
              
              className="w-full rounded border p-2"
              placeholder="Enter Available Quantity"
              required
            />
          </div>
          <div className="col-span-2">
            <label className="block mb-2">Detail Description</label>
            <textarea
              name="description"
            
              className="w-full rounded border p-2"
              placeholder="Enter Detail Description"
              rows={4}
              required
            />
          </div>
        </div>
        <div className="mt-6">
          <button type="submit" className="btn btn-primary">Add Toy</button>
        </div>
      </form>
    </div>
          </div>
        </div>
      </div>
    );
};

export default AddToy;