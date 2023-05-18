
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "./Section.css";

// import required modules
import { FreeMode, Pagination } from "swiper";
import { Link } from "react-router-dom";

const Section = () => {

    return (
        <div className="my-11 py-14">
            <h1 className="text-center text-5xl font-bold mb-6 py-9">We design toys not just for kids
but with kids</h1>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide><div className="card card-side  bg-black  shadow-xl">
  <figure><img src="https://cdn.shopify.com/s/files/1/1152/4590/files/6.png?v=1676907457" alt="Movie"/></figure>
  <div className="card-body  text-white">
    <h2 className="card-title text-white">Electic Toys</h2>
    <p>Click the button to watch on Jetflix app.</p>
    <div className="card-actions justify-end">
    <Link to={`/cat/${('Electronic Toys')}`}><button className="btn btn-primary">Go...</button></Link>
    
    </div>
  </div>
</div></SwiperSlide>
          <SwiperSlide><div className="card card-side  bg-black  shadow-xl">
  <figure><img src="https://cdn.shopify.com/s/files/1/1152/4590/files/5.png?v=1676907497" alt="Movie"/></figure>
  <div className="card-body text-white">
    <h2 className="card-title">Puzzels</h2>
    <p>Click the button to watch on Jetflix app.</p>
    <div className="card-actions justify-end">
    <Link to={`/cat/${('Puzzles')}`}><button className="btn btn-primary">Go...</button></Link>
    
    </div>
  </div>
</div></SwiperSlide>
          <SwiperSlide><div className="card card-side bg-black  shadow-xl">
  <figure><img src="https://cdn.shopify.com/s/files/1/1152/4590/files/post19-copyright-650x572.jpg?v=1676888784" alt="Movie"/></figure>
  <div className="card-body text-white">
    <h2 className="card-title text-white">Remote Control Toys</h2>
    <p>Click the button to watch on Jetflix app.</p>
    <div className="card-actions justify-end">
    <Link to={`/cat/${('Remote Control Toys')}`}><button className="btn btn-primary">Go...</button></Link>
    
    </div>
  </div>
</div></SwiperSlide>
          <SwiperSlide><div className="card card-side bg-black  shadow-xl">
  <figure><img src="https://cdn.shopify.com/s/files/1/1152/4590/files/4.png?v=1676907236" alt="Movie"/></figure>
  <div className="card-body text-white">
    <h2 className="card-title">Arts and Crafts</h2>
    <p>Click the button to watch on Jetflix app.</p>
    <div className="card-actions justify-end">
    <Link to={`/cat/${('Arts and Crafts')}`}><button className="btn btn-primary">Go...</button></Link>

    </div>
  </div>
</div></SwiperSlide>
          <SwiperSlide><div className="card card-side bg-black shadow-xl">
  <figure><img src="https://cdn.shopify.com/s/files/1/1152/4590/files/2.png?v=1676907288" alt="Movie"/></figure>
  <div className="card-body text-white">
    <h2 className="card-title">Featured</h2>
    <p>Click the button to watch on Jetflix app.</p>
    <div className="card-actions justify-end">
    <Link to={`/cat/${('Remote Control Toys')}`}><button className="btn btn-primary">Go...</button></Link>

    </div>
  </div>
</div></SwiperSlide>
         
        </Swiper>
      </div>
    );
};

export default Section;