import { Link, NavLink, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import { useState } from "react";

function Navbar() {
  const navigate = useNavigate();

  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(true);

  return (
    <nav className="flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400">
      <Link to="/">
        <img className="w-44 cursor-pointer" src={assets.logo} />
      </Link>

      <ul className="hidden md:flex items-start gap-5 font-medium   ">
        <li>
          <NavLink to="/" className="py-1">
            Home
          </NavLink>
          <br className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </li>
        <li>
          <NavLink to="/doctors" className="py-1">
            Doctors
          </NavLink>
          <br className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </li>
        <li>
          <NavLink to="/about" className="py-1">
            About
          </NavLink>
          <br className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </li>
        <li>
          <NavLink to="/contact" className="py-1">
            Contact
          </NavLink>
          <br className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
        </li>
      </ul>

      <div className="flex items-center gap-4">
        {token ? (
          <div className="flex items-center gap-2 cursor-pointer group relative">
            <img
              src={assets.profile_pic}
              alt="profile picture"
              className="w-8 rounded-full"
            />
            <img
              src={assets.dropdown_icon}
              alt="dropdown_icon"
              className="w-2.5"
            />
            <div className="absolute top-0 right-0 pt-14 text-ase font-medium text-gray-600 z-20 hidden group-hover:block">
              <div className="min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4">
                <p
                  className="hover:text-black cursor-pointer"
                  onClick={() => navigate("/user-profile")}
                >
                  My Profile
                </p>
                <p
                  className="hover:text-black cursor-pointer"
                  onClick={() => navigate("/user-appointment")}
                >
                  My Appointment
                </p>
                <p
                  className="hover:text-black cursor-pointer"
                  onClick={() => setToken(false)}
                >
                  Logout
                </p>
              </div>
            </div>
          </div>
        ) : (
          <button
            className="bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block"
            onClick={() => navigate("/login")}
          >
            Create an account
          </button>
        )}

        <img
          onClick={() => setShowMenu(true)}
          className="w-6 md:hidden"
          src={assets.menu_icon}
          alt="menu-icon"
        />

        {/* ---------Mobile Menu------------- */}
        <nav
          className={`${
            showMenu ? "fixed w-full" : "h-0 w-0"
          } md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all `}
        >
          <div className="flex items-center justify-between px-5 py-6">
            <Link to="/">
              <img className="w-38" src={assets.logo} alt="Logo" />
            </Link>
            <img
              className="w-7"
              onClick={() => setShowMenu(false)}
              src={assets.cross_icon}
              alt="Cancel-icon"
            />
          </div>
          <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium">
            <li onClick={() => setShowMenu(false)}>
              <NavLink className="px-4 py-2 rounded full inline-block" to="/">
                Home
              </NavLink>
            </li>
            <li onClick={() => setShowMenu(false)}>
              <NavLink
                className="px-4 py-2 rounded full inline-block"
                to="/doctors"
              >
                Doctors
              </NavLink>
            </li>
            <li onClick={() => setShowMenu(false)}>
              <NavLink
                className="px-4 py-2 rounded full inline-block"
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li onClick={() => setShowMenu(false)}>
              <NavLink
                className="px-4 py-2 rounded full inline-block"
                to="/contact"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </nav>
  );
}

export default Navbar;
