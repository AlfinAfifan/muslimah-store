import React from 'react';
import logo from '../assets/images/logo.png';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar bg-sky-200 px-20 fixed top-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <NavLink to="/">Beranda</NavLink>
            </li>
            <li>
              <NavLink to="/produk">Produk</NavLink>
            </li>
            <li>
              <NavLink to="/kategori">Kategori</NavLink>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">
          <img src={logo} alt="" className="w-40" />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink to="/">Beranda</NavLink>
          </li>
          <li>
            <NavLink to="/produk">Produk</NavLink>
          </li>
          <li>
            <NavLink to="/kategori">Kategori</NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <input type="text" placeholder="Type here" className="input input-sm border w-64 rounded-s-md rounded-e-none" />
        <button className="btn btn-sm btn-neutral rounded-s-none rounded-e-md">
          <FaMagnifyingGlass />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
