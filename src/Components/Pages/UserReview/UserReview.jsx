import React, { useEffect, useState } from "react";

const UserReview = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/review")
      .then((res) => res.json())
      .then((result) => setData(result));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const review = e.target.review.value;
    const name = e.target.name.value;
    const value = { review, name };
    fetch("http://localhost:5000/review", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(value),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
  };

  return (
    <div className="mt-9 p-10">
      <h1 className="text-center font-bold text-4xl">What They Say</h1>
      <p className="text-center text-cyan-400 mt-4">CUSTOMER TESTIMONIALS</p>
      <div className="carousel mt-7 h-2/5 text-center mx-auto w-1/2">
        {data.map((d) => (
          <div key={d._id} className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title ">{d.name} says: </h2>
            <p className="text-secondary-focus font-extrabold">{d.review}</p>
            <div className="card-actions justify-end">
            
            </div>
          </div>
        </div>
        ))}
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        {data.map((_, index) => (
          <a key={index} href={`#item${index + 1}`} className="btn btn-xs">
            {index + 1}
          </a>
        ))}
      </div>
      <h1 className="text-center mt-6 font-bold text-4xl">Tell Us More</h1>
      <div className="mx-auto mt-7 w-1/4">
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Your name" name="name" className="input input-bordered input-info w-full max-w-xs" />
          <textarea placeholder="Bio" name="review" className="textarea textarea-bordered textarea-lg w-full max-w-xs"></textarea>
          <button className="btn btn-accent">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default UserReview;
