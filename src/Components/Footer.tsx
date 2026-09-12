/*
import Logo from "../assets/logo-text.png";

export const Footer = () => {
  return (
    <footer className="border-t-2 border-gray-200 mt-5">
      <section className="flex justify-between container mx-auto items-start py-20">
        <div className="grid gap-5">
          <img src={Logo} alt="" />
          <p className="text-[#64748B]">
            Curated tools, technologies, and resources for developers building{" "}
            <br />
            modern software.
          </p>
          <div className="flex gap-6">
            <span>GitHub</span>
            <span>Twitter</span>
            <span>LinkedIn</span>
          </div>
        </div>
        <ul className="grid gap-2 font-normal">
          <li className="font-bold mb-4">PRODUCT</li>
          <li className="text-[#64748B]">Home</li>
          <li className="text-[#64748B]">Technologies</li>
          <li className="text-[#64748B]">Projects</li>
        </ul>
        <ul className="grid gap-2 font-normal">
          <li className="font-bold mb-4">COMPANY</li>
          <li className="text-[#64748B]">About</li>
          <li className="text-[#64748B]">Contact</li>
          <li className="text-[#64748B]">Careers</li>
        </ul>
        <ul className="grid gap-2 font-normal">
          <li className="font-bold mb-4">LEGAL</li>
          <li className="text-[#64748B]">Privacy Policy</li>
          <li className="text-[#64748B]">Terms of Service</li>
        </ul>
      </section>

      <div className="border-t border-gray-100 py-8 container mx-auto">
        <div className="flex justify-between items-center text-sm text-[#94A3B8]">
          <p>&copy; 2026 Dev Stack. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="text-[#64748B]">Privacy</span>
            <span className="text-[#64748B]">Terms</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
*/

import Logo from "../assets/logo-text.png";

export const Footer = () => {
  return (
    <footer className="border-t-2 border-gray-200 mt-5">
      {/* Top Section */}
      <section className="flex flex-col md:flex-row justify-between container mx-auto items-center md:items-start py-12 md:py-20 px-4 md:px-0 text-center md:text-left">
        <div className="flex flex-col items-center md:items-start gap-4 md:gap-5 max-w-md md:max-w-none">
          <img src={Logo} alt="Dev Stack" className="h-7 md:h-auto" />
          <p className="text-[#64748B] text-sm md:text-base">
            Curated tools, technologies, and resources for developers building{" "}
            <br className="hidden md:inline" />
            modern software.
          </p>
          <div className="flex items-center gap-3 text-sm md:text-base text-slate-800 font-medium">
            <span className="cursor-pointer">GitHub</span>
            <span className="text-slate-400">•</span>
            <span className="cursor-pointer">Twitter</span>
            <span className="text-slate-400">•</span>
            <span className="cursor-pointer">LinkedIn</span>
          </div>
        </div>

        {/* Desktop Links (মোবাইলে হাইড থাকবে) */}
        <ul className="hidden md:grid gap-2 font-normal">
          <li className="font-bold mb-4">PRODUCT</li>
          <li className="text-[#64748B] cursor-pointer">Home</li>
          <li className="text-[#64748B] cursor-pointer">Technologies</li>
          <li className="text-[#64748B] cursor-pointer">Projects</li>
        </ul>

        <ul className="hidden md:grid gap-2 font-normal">
          <li className="font-bold mb-4">COMPANY</li>
          <li className="text-[#64748B] cursor-pointer">About</li>
          <li className="text-[#64748B] cursor-pointer">Contact</li>
          <li className="text-[#64748B] cursor-pointer">Careers</li>
        </ul>

        <ul className="hidden md:grid gap-2 font-normal">
          <li className="font-bold mb-4">LEGAL</li>
          <li className="text-[#64748B] cursor-pointer">Privacy Policy</li>
          <li className="text-[#64748B] cursor-pointer">Terms of Service</li>
        </ul>
      </section>

      {/* Bottom Border and Copyright Section */}
      <div className="border-t border-gray-100 py-6 md:py-8 container mx-auto px-4 md:px-0">
        <div className="flex justify-between items-center text-xs md:text-sm text-[#94A3B8]">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex gap-4 md:gap-6">
            <span className="text-[#64748B] cursor-pointer">Privacy</span>
            <span className="text-[#64748B] cursor-pointer">Terms</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
