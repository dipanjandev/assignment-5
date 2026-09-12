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
