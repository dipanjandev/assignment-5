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
