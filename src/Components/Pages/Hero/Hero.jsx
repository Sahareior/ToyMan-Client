import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./Hero.css";
import { Pagination } from "swiper";

const Hero = () => {
  return (
    <div className="hero-container">
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
              <SwiperSlide>
          <div
            className="hero sm:min-h-screen h-screen"
            style={{
              backgroundImage:
                "url('https://cdn.shopify.com/s/files/1/1152/4590/files/s2_e987b351-26d8-4108-898b-eca9e6a14311.png?v=1676882617')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              height:'50%'
            }}
          >
            <div className="hero-overlay bg-opacity-5"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md ml-40">
                <h1 className="mb-5 md:text-7xl font-bold">New Arrival</h1>
                <p className="mb-5">One Box Toy</p>
                <button className="btn btn-primary">Get Started</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero sm:min-h-screen h-screen"
            style={{
              backgroundImage:
                "url('https://cdn.shopify.com/s/files/1/1152/4590/files/s2_d2cfbd18-e9ef-44b4-acd0-0d2bacba94fb.png?v=1676883152')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              height:'50%'
            }}
          >
            <div className="hero-overlay bg-opacity-5"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md ml-40">
                <h1 className="mb-5 md:text-7xl font-bold">New Arrival</h1>
                <p className="mb-5">One Box Toy</p>
                <button className="btn btn-primary">Get Started</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero;
