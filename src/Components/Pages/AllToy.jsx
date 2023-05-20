import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const AllToy = () => {
    const data = useLoaderData()
    const [clicked, setClicked] = useState(false)
    const [dec, setDec] = useState([])
    
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
    
    console.log(clicked)

  
      useEffect(()=>{
        fetch('http://localhost:5000/items?sort=desc')
        .then(res=>res.json())
        .then(data=> {
         
          if(clicked){
            setDec(data)
          }
        })
      },[clicked])
    
let array 
if(clicked){
  array = dec
}
else{
  array = result
}

const handleClick = () => {
  setClicked(prevValue => !prevValue);
};



    return (
        <div className="overflow-x-auto w-full mt-10">
          <button onClick={handleClick} className="btn btn-warning mx-auto">{clicked?'Click to make it Accending':'Click to make it Descending'}</button>
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
       array && array.map(d=>  <tr key={d._id}>
             
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