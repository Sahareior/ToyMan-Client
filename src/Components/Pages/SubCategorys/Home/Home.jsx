import React, { useContext, useEffect, useState } from "react";
import { addTodb } from "../../../Tools/Tools";
import { FaShoppingCart } from "react-icons/fa";
import { AuthContext } from "../../../Provider/AuthProvider";

import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  const { cart, setCart } = useContext(AuthContext);
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6);

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    fetch("https://hope-nine.vercel.app/items")
      .then((res) => res.json())
      .then((result) => setData(result));
  }, []);

  const generateStars = (rating) => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(
        <span key={i} className="text-yellow-500">
          ★
        </span>
      );
    }
    return stars;
  };

  const handleCart = (d) => {
    addTodb(d._id);
    const data = [...cart, d];
    setCart(data);
    console.log(d);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <div className="grid mx-auto ml-9 mt-9 justify-between gap-6 md:grid-cols-3">
        {currentItems.map((d) => (
     <div data-aos="zoom-in" key={d._id} className="gap-y-3 flex justify-between card card-bordered w-96 bg-base-100 shadow-xl" style={{ height: '100%' }}>

            <figure>
            <img src={d.image} alt="Shoes" style={{ width: '100%', height: '350px', objectFit: 'cover' }} />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{d.toyName}</h2>
              <div className="card-actions ">
                <h1 className="font-bold">${d.price}</h1>
                <h1 className="ml-44">{generateStars(Math.floor(d.rating))}</h1>
              </div>
              <div className="card-actions justify-between">
                <button
                  onClick={() => handleCart(d)}
                  className="btn btn-success"
                >
                  <FaShoppingCart />{" "}
                </button>
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-3 mt-4">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            className={`btn ${
              currentPage === index + 1 ? "btn-primary" : "btn-secondary"
            }`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Home;
