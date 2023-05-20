import React, { useEffect, useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./UserReview.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const UserReview = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/review")
      .then((res) => res.json())
      .then((result) => setData(result));
  }, []);
console.log(data)
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
    <div className="mt-9 flex flex-col gap-6 p-10">
      <h1 className="text-center font-bold text-4xl">What They Say</h1>
      <p className="text-center text-cyan-400 mt-4">CUSTOMER TESTIMONIALS</p>
      <div className="w-full ">
      <div className="w-4/6 my-8 mx-auto">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {
          data.map(d=>
            <SwiperSlide key={d._id}>
            <div className="w-5/6 bg-slate-300 py-12 shadow-xl">
              <div className="">
                <p className="font-bold font-mono text-2xl">{d.review}</p>
                <p className="text-secondary mt-3 font-bold">Says: {d.name}</p>
              </div>
            </div>
          </SwiperSlide>
        )
        }

     
      </Swiper>
    </div>
    </div>
      <h1 className="text-center mt-6 font-bold text-4xl">Tell Us More</h1>
      <div className="mx-auto mt-7 w-1/4">
        <form className="flex flex-col justify-center gap-4" onSubmit={handleSubmit}>
          <input type="text" placeholder="Your name" name="name" className="input input-bordered input-info w-full max-w-xs" />
          <textarea placeholder="Your opinion" name="review" className="textarea textarea-bordered textarea-lg w-full max-w-xs"></textarea>
          <button className="btn btn-accent ml-11 w-56">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default UserReview;


