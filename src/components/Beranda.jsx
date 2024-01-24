import React from 'react';
import Navbar from './Navbar';
import Slider from './Slider';
import product1 from '../assets/images/11.jpg';
import product2 from '../assets/images/12.jpg';
import product3 from '../assets/images/13.jpg';
import product4 from '../assets/images/14.jpg';
import product5 from '../assets/images/15.jpg';
import product6 from '../assets/images/16.jpg';
import Footer from './Footer';

const Beranda = () => {
  return (
    <>
      <Navbar />
      <Slider />

      <div className="px-40 text-xl font-semibold">
        <h1 className="py-10">Discount</h1>

        {/* CARD */}
        <div className="grid grid-cols-3 gap-x-24 gap-y-28">
          <div className="card card-compact w-96 bg-base-100 shadow-xl cursor-pointer rounded-none">
            <figure>
              <img src={product1} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-2xl">Dress Ubrella</h2>
              <div className="flex items-center justify-between">
                <p>Rp 250.000</p>
                <p className="text-end font-normal">Discount 20%</p>
              </div>
              <p className="font-normal text-sm mt-5 text-gray-500">Last updated 3 mins ago</p>
            </div>
          </div>

          <div className="card card-compact w-96 bg-base-100 shadow-xl cursor-pointer rounded-none">
            <figure>
              <img src={product2} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-2xl">Dress Alorial</h2>
              <div className="flex items-center">
                <p>Rp 250.000</p>
                <p className="text-end font-normal">Discount 20%</p>
              </div>
              <p className="font-normal text-sm mt-5 text-gray-500">Last updated 3 mins ago</p>
            </div>
          </div>

          <div className="card card-compact w-96 bg-base-100 shadow-xl cursor-pointer rounded-none">
            <figure>
              <img src={product3} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-2xl">Dress Halini</h2>
              <div className="flex items-center">
                <p>Rp 250.000</p>
                <p className="text-end font-normal">Discount 20%</p>
              </div>
              <p className="font-normal text-sm mt-5 text-gray-500">Last updated 3 mins ago</p>
            </div>
          </div>
          <div className="card card-compact w-96 bg-base-100 shadow-xl cursor-pointer rounded-none">
            <figure>
              <img src={product4} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-2xl">Dress Khaftan</h2>
              <div className="flex items-center">
                <p>Rp 250.000</p>
                <p className="text-end font-normal">Discount 20%</p>
              </div>
              <p className="font-normal text-sm mt-5 text-gray-500">Last updated 3 mins ago</p>
            </div>
          </div>

          <div className="card card-compact w-96 bg-base-100 shadow-xl cursor-pointer rounded-none">
            <figure>
              <img src={product5} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-2xl">Dress Alana</h2>
              <div className="flex items-center">
                <p>Rp 250.000</p>
                <p className="text-end font-normal">Discount 20%</p>
              </div>
              <p className="font-normal text-sm mt-5 text-gray-500">Last updated 3 mins ago</p>
            </div>
          </div>

          <div className="card card-compact w-96 bg-base-100 shadow-xl cursor-pointer rounded-none">
            <figure>
              <img src={product6} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-2xl">Dress Satin</h2>
              <div className="flex items-center">
                <p>Rp 250.000</p>
                <p className="text-end font-normal">Discount 20%</p>
              </div>
              <p className="font-normal text-sm mt-5 text-gray-500">Last updated 3 mins ago</p>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <Footer />
    </>
  );
};

export default Beranda;
