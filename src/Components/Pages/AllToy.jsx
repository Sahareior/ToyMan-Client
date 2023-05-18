import { useLoaderData } from "react-router-dom";

const AllToy = () => {
    const data = useLoaderData()
    console.log(data)
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


     {
        data.map(d=>  <tr key={d._id}>
             
            <td>{d.name}</td> 
            <td>{d.toyName}</td> 
            <td>{d.subcategory}</td> 
            <td>{d.price}</td> 
          
            <td>{d.availableQuantity}</td>
            <td><button className="btn btn-outline btn-accent">Details</button></td>
          </tr>)
     }
    
    </tbody> 
 
  </table>
</div>
    );
};

export default AllToy;