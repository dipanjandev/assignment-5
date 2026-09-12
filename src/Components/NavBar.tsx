/*
import Logo from "../assets/logo-text.png";



const NavBar = () => {

  return (

    <nav className="border-b-2 border-gray-200 sticky top-0 z-50 bg-white/80 backdrop-blur-[6px]">

      <section className="flex justify-between container mx-auto items-center py-6">

        <span>

          <img src={Logo} alt="" />

        </span>

        <ul className="flex gap-7 font-medium">

          <li className="text-[#DB2777] font-semibold">Home</li>

          <li>Technologies</li>

          <li>Projects</li>

          <li>About</li>

          <li>Contact</li>

        </ul>

        <div className="flex gap-3">

          <button className="text-[#334155] font-medium">Sign In</button>

          <button className="font-semibold bg-[#D91B7E] px-5 py-2.5 rounded-4xl text-white">

            Sign Up

          </button>

        </div>

      </section>

    </nav>

  );

};



export default NavBar;
*/

import { useState } from "react";
import Logo from "../assets/logo-text.png";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="border-b-2 border-gray-200 sticky top-0 z-50 bg-white/80 backdrop-blur-[6px]">
      <section className="flex justify-between container mx-auto items-center py-4 md:py-6 px-4 md:px-0">
        {/* Mobile Hamburger Button (ছবি অনুযায়ী বামপাশে) */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-2xl text-gray-500 focus:outline-none cursor-pointer"
          >
            {isOpen ? <HiOutlineX /> : <HiOutlineMenu />}
          </button>
        </div>

        {/* Logo (মোবাইলে সেন্টারে বা মাঝে থাকবে) */}
        <span>
          <img src={Logo} alt="DevStack" className="h-7 md:h-auto" />
        </span>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-7 font-medium">
          <li className="text-[#DB2777] font-semibold cursor-pointer">Home</li>
          <li className="cursor-pointer">Technologies</li>
          <li className="cursor-pointer">Projects</li>
          <li className="cursor-pointer">About</li>
          <li className="cursor-pointer">Contact</li>
        </ul>

        {/* Buttons (ডেস্কটপ এবং মোবাইল উভয়ের জন্যই ডানপাশে) */}
        <div className="flex items-center gap-2 md:gap-3">
          <button className="text-[#334155] font-medium text-xs md:text-base px-2 py-1 cursor-pointer">
            Sign In
          </button>
          <button className="font-semibold bg-[#D91B7E] px-4 md:px-5 py-1.5 md:py-2.5 rounded-4xl text-white text-xs md:text-base cursor-pointer">
            Sign Up
          </button>
        </div>
      </section>

      {/* Mobile Dropdown Menu (হ্যামবার্গার ক্লিকে ওপেন হবে) */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white px-6 py-5 shadow-md">
          <ul className="flex flex-col gap-4 font-medium text-slate-700">
            <li className="text-[#DB2777] font-semibold">Home</li>
            <li>Technologies</li>
            <li>Projects</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
