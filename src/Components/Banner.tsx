/*
import BannerImage from "../assets/banner-stack.png";

const Banner = () => {
  return (
    <div>
      <section className="flex container mx-auto justify-between items-center">
        <div>
          <h1 className="font-extrabold text-[60px] text-[#0F172A] pb-6">
            Build Your Ideal <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED]">
              Development Stack
            </span>
          </h1>
          <p className="pb-10 text-[#475569]">
            Explore frontend, backend, database, and tooling options, compare
            them side by side,
            <br />
            and put together the stack that fits your next project.
          </p>
          <div className="flex gap-3">
            <button className="px-4 py-3 bg-linear-to-r from-[#F97316] to-[#EC4899] rounded-lg font-semibold text-white">
              Explore Technologies
            </button>
            <button className="border border-[#E5E7EB] text-[#374151] rounded-lg px-10 py-3">
              Learn More
            </button>
          </div>
        </div>
        <img className="h-130" src={BannerImage} alt="" />
      </section>
    </div>
  );
};

export default Banner;
*/

import BannerImage from "../assets/banner-stack.png";

const Banner = () => {
  return (
    <div>
      <section className="flex flex-col md:flex-row container mx-auto justify-between items-center px-4 md:px-0 py-12 md:py-0 text-center md:text-left">
        <div className="flex flex-col items-center md:items-start">
          <h1 className="font-extrabold text-[36px] sm:text-[44px] md:text-[60px] text-[#0F172A] leading-tight pb-4 md:pb-6">
            Build Your Ideal <br className="hidden md:inline" />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED]">
              Development Stack
            </span>
          </h1>
          <p className="pb-8 md:pb-10 text-sm sm:text-base text-[#475569] max-w-xl md:max-w-none">
            Explore frontend, backend, database, and tooling options, compare
            them side by side,
            <br className="hidden md:inline" /> and put together the stack that
            fits your next project.
          </p>
          <div className="flex flex-row items-center justify-center gap-3 w-full sm:w-auto">
            <button className="px-4 sm:px-6 py-3 bg-linear-to-r from-[#F97316] to-[#EC4899] rounded-xl font-semibold text-white text-sm sm:text-base cursor-pointer shadow-sm">
              Explore Technologies
            </button>
            <button className="border border-[#E5E7EB] text-[#374151] rounded-xl px-6 sm:px-10 py-3 text-sm sm:text-base cursor-pointer hover:bg-slate-50 transition-colors">
              Learn More
            </button>
          </div>
        </div>

        {/* Banner Image */}
        <div className="mt-10 md:mt-0 flex justify-center w-full md:w-auto">
          <img
            className="w-200 sm:w-80 md:w-auto h-auto md:h-130 object-contain"
            src={BannerImage}
            alt="Development Stack"
          />
        </div>
      </section>
    </div>
  );
};

export default Banner;
