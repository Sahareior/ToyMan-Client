import React from "react";

const UserReview = () => {
  return (
    <div className="mt-9 p-10">
      <h1 className="text-center font-bold text-4xl">What They Say</h1>
      <p className="text-center text-cyan-400 mt-4">CUSTOMER TESTIMONIALS</p>
      <div className="carousel mt-7 mx-auto w-1/2">
        <div id="item1" className="carousel-item w-full mx-auto">
        <div className="card lg:card-side bg-base-100 shadow-xl">
  <figure><img src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg" alt="Album"/></figure>
  <div className="card-body">
    <h2 className="card-title"></h2>
    <p  className="font-bold">Awesomeeeee</p>
    <div className="card-actions justify-end">
 
    </div>
  </div>
</div>
        </div>
        <div id="item2" className="carousel-item w-full">
        <div className="card lg:card-side bg-base-100 shadow-xl">
  <figure><img src="https://img.freepik.com/free-photo/cheerful-curly-business-girl-wearing-glasses_176420-206.jpg?size=626&ext=jpg" alt="Album"/></figure>
  <div className="card-body">
    <h2 className="card-title"></h2>
    <p className="font-bold">Soo good Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, hic!</p>
    <div className="card-actions justify-end">
  
    </div>
  </div>
</div>
        </div>
        <div id="item3" className="carousel-item w-full">
        <div className="card lg:card-side bg-base-100 shadow-xl">
  <figure><img src="https://img.freepik.com/free-photo/portrait-young-handsome-man-jean-shirt-smiling-with-crossed-arms_176420-12083.jpg?size=626&ext=jpg" alt="Album"/></figure>
  <div className="card-body">
    <h2 className="card-title"></h2>
    <p  className="font-bold">They are really goood</p>
    <div className="card-actions justify-end">
   
    </div>
  </div>
</div>
        </div>
        <div id="item4" className="carousel-item w-full">
        <div className="card lg:card-side bg-base-100 shadow-xl">
  <figure><img src="https://img.freepik.com/premium-photo/young-woman-student-backpack-hold-pc-isolated-blue-wall-background-studio-portrait-education-high-school-university-college-concept_231208-14294.jpg?size=626&ext=jpg" alt="Album"/></figure>
  <div className="card-body">
    <h2 className="card-title"></h2>
    <p  className="font-bold">This is the best place for the kids</p>
    <div className="card-actions justify-end">
      
    </div>
  </div>
</div>
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
        <a href="#item4" className="btn btn-xs">
          4
        </a>
      </div>
      <h1 className="text-center mt-6 font-bold text-4xl">Tell Us More</h1>
      <div className="mx-auto mt-7 w-1/4">
      <textarea placeholder="Bio" className="textarea  textarea-bordered textarea-lg w-full max-w-xs" ></textarea>
      </div>
    </div>
  );
};

export default UserReview;
