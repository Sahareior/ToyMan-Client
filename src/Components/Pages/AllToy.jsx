import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const AllToy = () => {
    const data = useLoaderData()

    const [result,setResult] = useState([])

    const[input, setInput] = useState("")
    useEffect(() => {
      const formattedInput = input.trim().replace(/\s/g, "");
    
      if (formattedInput === "") {
        setResult(data);
      } else {
        const find = data.filter(d => d.toyName.toLowerCase().replace(/\s/g, "").includes(formattedInput.toLowerCase()));
        setResult(find);
      }
    }, [input, data]);
    





    return (
        <div className="overflow-x-auto mt-10">
          <div className="my-4 mx-3">
          <input
  type="text"
  placeholder="Type here"
  name="search"
  className="input input-bordered input-info w-full max-w-xs"
  value={input}
  onChange={(e) => setInput(e.target.value)}
/>

<button onClick={() => console.log(input)} className="btn btn-success ml-2">
  Search
</button>

          </div>
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
       result && result.map(d=>  <tr key={d._id}>
             
            <td>{d.name}</td> 
            <td>{d.toyName}</td> 
            <td>{d.subcategory}</td> 
            <td>{d.price}</td> 
          
            <td>{d.availableQuantity}</td>
           <Link to={`/details/${d._id}`}> <td><button className="btn btn-outline btn-accent">Details</button></td></Link>
          </tr>)
     }
    
    </tbody> 
 
  </table>
</div>
    );
};

export default AllToy;