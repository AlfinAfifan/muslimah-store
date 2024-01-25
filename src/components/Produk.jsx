import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import product1 from '../assets/images/4_1692085296137.jpg';
import product2 from '../assets/images/JLBV3042_1705978157409.jpg';
import product3 from '../assets/images/JLBV3099_1705978897680.jpg';
import product4 from '../assets/images/JLBV3185_1705978464608.jpg';
import product5 from '../assets/images/JLBV3139_1705978697751.jpg';
import product6 from '../assets/images/JLBV5493_1704336258244.jpg';
import acc1 from '../assets/images/DJLBV1109_1697511718734.jpg';
import acc2 from '../assets/images/JLBV8832_1701746046653.jpg';
import acc3 from '../assets/images/JLBV4727_1690862662382.jpg';
import acc4 from '../assets/images/JLBV4738_1690862799612.jpg';
import jilbab1 from '../assets/images/JLBV3517_PURPLE_BROWN_1701745310961.jpg';
import jilbab2 from '../assets/images/JLBV3482_1701745142380.jpg';
import jilbab3 from '../assets/images/JLBV3459_1701744679356.jpg';
import jilbab4 from '../assets/images/JLBV3397_1701745512408.jpg';
import jilbab5 from '../assets/images/JLBV3547_1701745677807.jpg';
import jilbab6 from '../assets/images/JLBV3496_1701745212197.jpg';

const Produk = () => {
  return (
    <>
      <Navbar />
      <div className="px-40 mt-40">
        <h1 className="text-4xl font-semibold text-center mt-20">Dress</h1>
        <div className="grid grid-cols-3 gap-x-16 gap-y-28 mt-10">
          <div className="card card-compact w-full bg-base-100 shadow-xl cursor-pointer rounded-none">
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

          <div className="card card-compact w-full bg-base-100 shadow-xl cursor-pointer rounded-none">
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

          <div className="card card-compact w-full bg-base-100 shadow-xl cursor-pointer rounded-none">
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
          <div className="card card-compact w-full bg-base-100 shadow-xl cursor-pointer rounded-none">
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

          <div className="card card-compact w-full bg-base-100 shadow-xl cursor-pointer rounded-none">
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

          <div className="card card-compact w-full bg-base-100 shadow-xl cursor-pointer rounded-none">
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

        {/* ACCESSORIES */}
        <h1 className="text-4xl font-semibold text-center mt-20">Accessories</h1>
        <div className="grid grid-cols-4 gap-x-10 mt-10">
          <div className="card card-compact w-full bg-base-100 shadow-xl cursor-pointer rounded-none">
            <figure>
              <img src={acc1} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-2xl">Kinan Bag Maroon</h2>
              <div className="flex items-center">
                <p>Rp 300.000</p>
                <p className="text-end font-normal">Discount 20%</p>
              </div>
              <p className="font-normal text-sm mt-5 text-gray-500">Last updated 3 mins ago</p>
            </div>
          </div>
          <div className="card card-compact w-full bg-base-100 shadow-xl cursor-pointer rounded-none">
            <figure>
              <img src={acc2} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-2xl">Baseball Cap Black</h2>
              <div className="flex items-center">
                <p>Rp 150.000</p>
                <p className="text-end font-normal">Discount 20%</p>
              </div>
              <p className="font-normal text-sm mt-5 text-gray-500">Last updated 3 mins ago</p>
            </div>
          </div>
          <div className="card card-compact w-full bg-base-100 shadow-xl cursor-pointer rounded-none">
            <figure>
              <img src={acc3} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-2xl">Ryn Syal Pink</h2>
              <div className="flex items-center">
                <p>Rp 100.000</p>
                <p className="text-end font-normal">Discount 20%</p>
              </div>
              <p className="font-normal text-sm mt-5 text-gray-500">Last updated 3 mins ago</p>
            </div>
          </div>
          <div className="card card-compact w-full bg-base-100 shadow-xl cursor-pointer rounded-none">
            <figure>
              <img src={acc4} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-2xl">Ryn Syal Violet</h2>
              <div className="flex items-center">
                <p>Rp 100.000</p>
                <p className="text-end font-normal">Discount 20%</p>
              </div>
              <p className="font-normal text-sm mt-5 text-gray-500">Last updated 3 mins ago</p>
            </div>
          </div>
        </div>
        {/* END ACCESORIS */}

        <h1 className="text-4xl font-semibold text-center mt-20">Hijab</h1>
        <div className="grid grid-cols-3 gap-x-16 gap-y-28 mt-10">
          <div className="card card-compact w-full bg-base-100 shadow-xl cursor-pointer rounded-none">
            <figure>
              <img src={jilbab1} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-2xl">Yaffa Hijab Purple</h2>
              <div className="flex items-center justify-between">
                <p>Rp 115.000</p>
                <p className="text-end font-normal">Discount 20%</p>
              </div>
              <p className="font-normal text-sm mt-5 text-gray-500">Last updated 3 mins ago</p>
            </div>
          </div>

          <div className="card card-compact w-full bg-base-100 shadow-xl cursor-pointer rounded-none">
            <figure>
              <img src={jilbab2} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-2xl">Yaffa Hijab Brown</h2>
              <div className="flex items-center">
                <p>Rp 115.000</p>
                <p className="text-end font-normal">Discount 20%</p>
              </div>
              <p className="font-normal text-sm mt-5 text-gray-500">Last updated 3 mins ago</p>
            </div>
          </div>

          <div className="card card-compact w-full bg-base-100 shadow-xl cursor-pointer rounded-none">
            <figure>
              <img src={jilbab3} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-2xl">Yaffa Hijab Black</h2>
              <div className="flex items-center">
                <p>Rp 115.000</p>
                <p className="text-end font-normal">Discount 20%</p>
              </div>
              <p className="font-normal text-sm mt-5 text-gray-500">Last updated 3 mins ago</p>
            </div>
          </div>
          <div className="card card-compact w-full bg-base-100 shadow-xl cursor-pointer rounded-none">
            <figure>
              <img src={jilbab4} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-2xl">Yaffa Hijab Sage</h2>
              <div className="flex items-center">
                <p>Rp 115.000</p>
                <p className="text-end font-normal">Discount 20%</p>
              </div>
              <p className="font-normal text-sm mt-5 text-gray-500">Last updated 3 mins ago</p>
            </div>
          </div>

          <div className="card card-compact w-full bg-base-100 shadow-xl cursor-pointer rounded-none">
            <figure>
              <img src={jilbab5} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-2xl">Yaffa Hijab Light Grey</h2>
              <div className="flex items-center">
                <p>Rp 115.000</p>
                <p className="text-end font-normal">Discount 20%</p>
              </div>
              <p className="font-normal text-sm mt-5 text-gray-500">Last updated 3 mins ago</p>
            </div>
          </div>

          <div className="card card-compact w-full bg-base-100 shadow-xl cursor-pointer rounded-none">
            <figure>
              <img src={jilbab6} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-2xl">Yaffa Hijab Pink</h2>
              <div className="flex items-center">
                <p>Rp 115.000</p>
                <p className="text-end font-normal">Discount 20%</p>
              </div>
              <p className="font-normal text-sm mt-5 text-gray-500">Last updated 3 mins ago</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Produk;
