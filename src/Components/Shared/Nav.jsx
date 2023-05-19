import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import { getItems } from '../Tools/Tools';

const Nav = () => {
  const{user,logOut} = useContext(AuthContext)

  const cartData = getItems()
  console.log(cartData)
  const count = Object.keys(cartData).length
  
  
  const photo = user? <img src={user.photoURL  } />: " "
    return (
        <div className="navbar py-5  bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li><a>Item 1</a></li>
              <li tabIndex={0}>
                <a className="justify-between">
                  Parent
                  <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
                </a>
                <ul className="p-2">
                  <li><a>Submenu 1</a></li>
                  <li><a>Submenu 2</a></li>
                </ul>
              </li>
              <li><a>Item 3</a></li>
            </ul>
          </div>
          <div className="sm:display-none">
  <ul className="flex gap-3 orizontal px-1 ">
    <li className='text-lg hover:text-violet-500 hover:scale-110 font-bold'><Link to='/'>Home</Link></li>
    <li className='text-lg hover:text-violet-500 hover:scale-110 font-bold '><Link to='/alltoy'>All Toyes</Link></li>
    <li className='text-lg hover:text-violet-500 hover:scale-110 font-bold'><Link to='/mytoy'>My Toyes</Link></li>
    <li className='text-lg hover:text-violet-500 hover:scale-110 font-bold'><Link to='/addtoy'>Add A Toy</Link></li>
    <li className='text-lg hover:text-violet-500 hover:scale-110 font-bold'><Link>Blog</Link></li>
  </ul>
</div>

        </div>
        {/*  */}
        <div className="navbar-center hidden lg:flex">
        <a className="btn btn-ghost normal-case text-xl"><img src="https://cdn.shopify.com/s/files/1/1152/4590/files/toyman_d3aab1e4-a273-4b68-a0c8-9b6f6e6282c2_190x.png?v=1675962545" alt="" /></a>
        </div>
        <div className="navbar-end">
        <div className="flex-none">
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle">
        <div className="indicator">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
          <span className="badge badge-sm indicator-item">{count}</span>
        </div>
      </label>
      <div tabIndex={0} className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
        <div className="card-body">
          <span className="font-bold text-lg">8 Items</span>
          <span className="text-info">Subtotal: $999</span>
          <div className="card-actions">
            <Link to='/cart'><button className="btn btn-primary btn-block">View cart</button></Link>
          </div>
        </div>
      </div>
    </div>
    <div className="dropdown dropdown-end">
      <p></p>
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
      {
        user? <div className="w-10 rounded-full">
        {photo}
      </div>  :  <p>click here</p>
      }
        
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
      
        {
        user? <li><a><button onClick={()=>logOut()} >Sign Out</button></a></li>: <NavLink className={({ isActive }) => (isActive ? 'active-link' : 'link')} to="/login"><li><a>Login</a></li></NavLink>

       
      }
      </ul>
    </div>
  </div>
        </div>
      </div>
    
    );
};

export default Nav;