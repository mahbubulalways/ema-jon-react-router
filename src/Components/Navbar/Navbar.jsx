import React from 'react';
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';




const Navbar = () => {
    return (
        <div  className='bg-slate-900 sticky top-0 z-10'>
           <div className='py-3 w-[80%] mx-auto flex justify-between items-center '>
            <img src={logo} alt="" />
         
            <div className='text-white space-x-4'>
            
            <Link to="/">Home</Link>
            <Link to="/review">Order Review</Link>
            <Link to="/manage">Manage Inventory</Link>
            <Link to="/log in">Login</Link>
            </div>
            </div> 
        </div>
    );
};

export default Navbar;

