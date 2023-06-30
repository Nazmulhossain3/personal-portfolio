/* eslint-disable react/jsx-no-undef */
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar bg-[#252734] text-white font-light">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <div tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  bg-[#252734] text-white rounded-box w-52">
            <NavLink className={({ isActive}) =>isActive ? "text-green-400" : ""} to='/'>Home</NavLink>
           
             
               
              
           <NavLink className={({ isActive}) =>isActive ? "text-green-400" : ""} to='/projects'>Projects</NavLink>
         
       
     
       <NavLink className={({ isActive}) =>isActive ? "text-green-400" : ""} to='/about'>About</NavLink>
            </div>
          </div>
          <a className="btn btn-ghost normal-case text-xl font-serif">NazmulPortfolio.com</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <div className="menu menu-horizontal px-1 gap-7 ">
            <NavLink className={({ isActive}) =>isActive ? "text-green-400" : ""} to='/'>Home</NavLink>
           
             
               
              
                <NavLink className={({ isActive}) =>isActive ? "text-green-400" : ""} to='/projects'>Projects</NavLink>
              
            
          
            <NavLink className={({ isActive}) =>isActive ? "text-green-400" : ""} to='/about'>About</NavLink>
          </div>
        </div>
        <div className="navbar-end mr-10">
        <p>Hire Me >></p>
        </div>
      </div>
    );
};

export default Navbar;