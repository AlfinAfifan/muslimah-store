import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Slider from './Slider';
import product1 from '../assets/images/4_1692085296137.jpg';
import acc from '../assets/images/JLBV1231_1675997647347.jpg';
import hijab from '../assets/images/JLBV3214_1700711553408.jpg';

const Kategori = () => {
  return (
    <>
      <Navbar />
      <Slider />
      <div className="px-40 mt-16">
        <h1 className="text-4xl text-center font-semibold">Kategori</h1>
        <div className="grid grid-cols-3 gap-10 mt-10">
          <div className="flex relative rounded-xl overflow-hidden cursor-pointer">
            <img src={product1} alt="Shoes" className="object-cover" />
            <div className="w-full h-full bg-black absolute opacity-35"></div>
            <div className="absolute font-semibold text-4xl text-white top-[45%] left-[50%] -translate-x-[50%] -transform-y-[50%]">Dress</div>
          </div>
          <div className="flex relative rounded-xl overflow-hidden cursor-pointer">
            <img src={acc} alt="Shoes" className="object-cover" />
            <div className="w-full h-full bg-black absolute opacity-35"></div>
            <div className="absolute font-semibold text-4xl text-white top-[45%] left-[50%] -translate-x-[50%] -transform-y-[50%]">Accessories</div>
          </div>
          <div className="flex relative rounded-xl overflow-hidden cursor-pointer">
            <img src={hijab} alt="Shoes" className="object-cover" />
            <div className="w-full h-full bg-black absolute opacity-35"></div>
            <div className="absolute font-semibold text-4xl text-white top-[45%] left-[50%] -translate-x-[50%] -transform-y-[50%]">Hijab</div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Kategori;
