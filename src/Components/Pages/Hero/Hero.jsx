import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import 'swiper/css/effect-cube';
import AOS from "aos";
import "aos/dist/aos.css";
import "./Hero.css";
import { Autoplay, Pagination, Navigation, EffectCube  } from "swiper";

export default function Carousel() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  

  useEffect(() => {
    AOS.init();
  }, []);

  const handleSlideChange = (swiper) => {
    setActiveSlideIndex(swiper.activeIndex);
  };

  return (
    <>
    <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 9000,
          disableOnInteraction: false,
        }}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation, EffectCube]}
        className="mySwiper"
        onSlideChange={handleSlideChange}
        // Adjust the breakpoints for responsive design
        breakpoints={{
          // When screen width is less than or equal to 768px (typical mobile screen width)
          768: {
            slidesPerView: 1, // Show only one slide at a time on mobile
          },
          // Add more breakpoints as needed for other screen sizes
        }}
      >
        <SwiperSlide>
          <div className="hi">
            <img
             className={` ${activeSlideIndex === 0 ? "fadeInUp" : ""} relative w-full help`}
              src="https://demo-unsen.myshopify.com/cdn/shop/files/slider2_2x_77981a34-fa73-419c-b7e2-e485752cba57.png?v=1661305755&width=1500"
              alt=""
            />
            <div className={` ${activeSlideIndex === 0 ? "fadeInLeft" : ""} absolute right-52 top-80`}> <h2 className="text-yellow-400">First Deal's Shipping Charge is Completely free</h2> </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="hi"> 
        <img
           
            className={` ${activeSlideIndex === 1 ? "fadeInUp" : ""} relative w-full`}
            src="https://demo-unsen.myshopify.com/cdn/shop/files/slider1_2x_52f7c581-93a0-451f-b407-2ebc6d344f38.png?v=1661305527&width=1500"
            alt=""
          />
       <div className={` ${activeSlideIndex === 1 ? "fadeInLeft" : ""} absolute left-72 top-80`}> <h2 className="text-red-600">The Best Shope In your Area!</h2></div>
        </div>
          
        </SwiperSlide>
        <SwiperSlide>
          <div className="hi">
          <img
           className={` ${activeSlideIndex === 2 ? "fadeInUp" : ""} relative w-full`}
            src="https://demo-unsen.myshopify.com/cdn/shop/files/slider3_2x_06cc6daf-8ec5-4d11-afe0-6e0fccfec4c2.png?v=1661305755&width=1500"
            alt=""
          />
          <div className={` ${activeSlideIndex === 2 ? "fadeInLeft" : ""} absolute right-72 top-80`}> <h2 className="text-red-600">The Best Shope In your Area!</h2></div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
