import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { FaGoogle } from 'react-icons/fa';

const Login = () => {
    const [error,setError] = useState(null)
    const navigate = useNavigate()
    const location = useLocation()
    
    const path = location.state?.from?.pathname || '/'

    const{signIn,googleSignIn} = useContext(AuthContext)
    
    const handleSubmit = (e)=>{
        e.preventDefault()
        const email = e.target.email.value 
        const password = e.target.password.value 
        console.log(email,password)
        if (email === '' && password === '') {
            return;
          }
          signIn(email,password)
          .then (result => {
              const user = result.user
              console.log(user)
              navigate(path)
            //   navigate(path, { replace:true })
          }).catch(error =>{
            setError("Please check your email and password")
              const errMsg = error.message 
              console.log(errMsg)
          })
          
    }
    return (
        <div className="hero w-full min-h-screen" style={{ backgroundImage: `url("https://img.freepik.com/free-vector/seamless-gold-rhombus-grid-pattern-black-background_53876-97589.jpg?size=626&ext=jpg")` }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center w-full text-neutral-content">
          <div className="w-full mt-6">
          <div className="mt-9 mx-auto w-11/12 min-h-screen ">
  <div className="hero-content gap-8 flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p>You can Sign in with <button onClick={googleSignIn} className='btn btn-active hover:text-emerald-400 hover:bg-white mt-6'> <FaGoogle></FaGoogle></button></p>
     
    </div>
    <div className="card flex-shrink-0 w-full max-w-md shadow-2xl ">
        <form onSubmit={handleSubmit}> 
    <div className="card-body">
     
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

          <button className="btn btn-primary">Login</button>
         <Link to='/reg'> <p className='mt-5'>Need an Account?</p></Link>
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

export default Login;