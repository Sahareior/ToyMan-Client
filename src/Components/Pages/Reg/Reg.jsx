import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { updateProfile } from 'firebase/auth';

const Reg = () => {
    const {createUser,auth} = useContext(AuthContext)
    const navigate = useNavigate()
    const handleSubmit =(e) =>{
        e.preventDefault()

        const name = e.target.name.value 
        const photo = e.target.photo.value 
        const email = e.target.email.value 
        const password = e.target.password.value 
        console.log(name,password,photo,email)
        // .....................................................
        createUser(email, password,name)
      .then((result) => {
        const user = result.user;
        console.log(user);

        updateProfile(auth.currentUser, {
          displayName: name, photoURL: photo
        })
          .then(() => {
            console.log("Profile updated successfully!");
            navigate('/')
          })
          .catch((error) => {
            console.log("Error updating profile:", error);
          });
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
    }
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url("https://img.freepik.com/free-vector/seamless-gold-rhombus-grid-pattern-black-background_53876-97589.jpg?size=626&ext=jpg")` }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="w-full">
          <div className="hero mx-auto w-11/12 min-h-screen ">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center flex-1 lg:text-left">
      <h1 className="text-5xl font-bold">Create a new account! </h1>
   
    </div>
    <div className="card flex-shrink-0 w-full max-w-md shadow-2xl ">
        <form onSubmit={handleSubmit}> 
    <div className="card-body">
     
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" placeholder="User Name" name='name' className="input input-bordered text-black" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" placeholder="Photo uRL" name='photo' className="input input-bordered text-black" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" name='email' className="input input-bordered text-black" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="text" placeholder="password" name='password' className="input input-bordered text-black" />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">

          <button className="btn btn-primary">Create an Account</button>
        
        </div>
      </div>
      </form>
      {/*  */}
    </div>
  </div>
</div>
          </div>
         
        </div>
        
      </div>
    );
};

export default Reg;