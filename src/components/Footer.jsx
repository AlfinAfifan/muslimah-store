import React from 'react';
import { FaInstagram, FaWhatsapp, FaFacebookF } from 'react-icons/fa6';
import logo from '../assets/images/logo.png';

const Footer = () => {
  return (
    <footer className="grid grid-cols-3 mt-20 bg-sky-200 py-10 px-32 items-center">
      <img src={logo} alt="" className="w-96" />
      <div className="flex flex-col pl-36">
        <h1 className="font-bold mb-3">Contact Us</h1>
        <div className="flex items-center gap-3 mt-1">
          <FaInstagram />
          <h1>jilbrev.id</h1>
        </div>
        <div className="flex items-center gap-3 mt-1">
          <FaWhatsapp />
          <h1>081287267777</h1>
        </div>
        <div className="flex items-center gap-3 mt-1">
          <FaFacebookF />
          <h1>Jilbrave.id</h1>
        </div>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.5702598267844!2d106.75788627483229!3d-6.5757918934176285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c49826973147%3A0xa645733a8617724e!2sJilbrave%3A%20Brand%20Fashion%20Remaja%20Nomor%20Satu%20di%20Indonesia!5e0!3m2!1sid!2sid!4v1706101757907!5m2!1sid!2sid"
        style={{ border: '0' }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        className="w-full h-52 rounded-lg"
      ></iframe>
    </footer>
  );
};

export default Footer;
