import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

function Header() {
  return (
    <header className="flex flex-col md:flex-row flex-wrap bg-primary rounded-lg px-8 md:px-10 lg:px-20">
      {/* -----Left Side------ */}
      <div className="md:w-1/2 flex flex-col flex-start items-center justify-center gap-4 py-10 m-auto md:py[10vw] md:mb-[30px]">
        <h1 className="text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight lg:leading-tight">
          Book Apointment with Trusted Doctors
        </h1>
        <div className="flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light">
          <img
            src={assets.group_profiles}
            alt="Group profile"
            className="w-28"
          />
          <p>
            Simply browse through our extensive list of trusted doctors,
            <br className="hidden sm:block" />
            schedule your apointment hassle-free today
          </p>
        </div>
        <a
          href="#speciality"
          className="flex items-left gap-2 bg-white px-8 py-3 rounded-full text-gray-600 text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300"
        >
          Book appointment
          <img src={assets.arrow_icon} alt="arrow right" className="w-3" />
        </a>
      </div>

      {/* -------------Right side----------- */}
      <div className="md:w-1/2 relative">
        <img
          src={assets.header_img}
          alt="doctors"
          className="w-full md:abolute bottom-0 h-auto rounded-lg"
        />
      </div>
    </header>
  );
}

export default Header;
