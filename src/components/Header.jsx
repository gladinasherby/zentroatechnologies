import React from "react";
import { FaWhatsapp, FaInstagram, FaFacebook, FaBars } from "react-icons/fa";

const Header = () => {
  return (
    <header className="flex justify-between items-center px-6 py-4 shadow-md fixed top-0 left-0 w-full z-50 bg-white">
      <div className="brand text-2xl font-extrabold text-gray-800 leading-tight">
        <h1 className="text-3xl">
          Zentr<span className="text-red-600 inline">o</span>a
        </h1>
        <span className="text-xs text-black-500 ml-1">Technologies</span>
      </div>
      <nav className="nav-links hidden md:flex gap-6 items-center text-gray-700 font-medium">
        <a
          href="https://zentroa.com/about-zentroa-technologies/"
          target="_blank"
          rel="noopener noreferrer"
        >
          ABOUT
        </a>
        <a
          href="https://zentroa.com/services/"
          target="_blank"
          rel="noopener noreferrer"
        >
          SERVICES
        </a>
        <a
          href="https://zentroa.com/career/"
          target="_blank"
          rel="noopener noreferrer"
        >
          CAREERS
        </a>
        <a
          href="https://zentroa.com/our-design-process/"
          target="_blank"
          rel="noopener noreferrer"
        >
          PROCESS
        </a>
        <a
          href="https://zentroa.com/feedback/"
          target="_blank"
          rel="noopener noreferrer"
        >
          REVIEWS
        </a>

        <a
          href="https://wa.me/zentroa"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp className="text-green-500 text-xl hover:scale-110 transition" />
        </a>
        <a
          href="https://www.instagram.com/zentroauae/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="text-pink-600 text-xl hover:scale-110 transition" />
        </a>
        <a
          href="https://www.facebook.com/zentroauae"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook className="text-blue-600 text-xl hover:scale-110 transition" />
        </a>
      </nav>
      <div className="hamburger md:hidden text-2xl text-gray-700">
        <FaBars />
      </div>
    </header>
  );
};

export default Header;
