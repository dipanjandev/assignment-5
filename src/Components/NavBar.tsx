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
