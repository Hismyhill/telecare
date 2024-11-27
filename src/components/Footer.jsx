import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

function Footer() {
  const year = new Date().getDate().getFullYear;
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr_] gap-14 my-10 mt-40 text-sm">
        <div>
          <img src={assets.logo} alt="Logo" className="mb-5 w-40" />
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
            omnis soluta corrupti iusto quam reiciendis ratione enim inventore
            iure numquam, delectus incidunt dignissimos, sapiente quod ad at
            temporibus rem voluptate.
          </p>
        </div>
        <div>
          <h5 className="text-xl flex-col gap-2 text-gray-600">COMPANY</h5>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About us</Link>
            </li>
            <li>
              <Link to="/contact">Contact us</Link>
            </li>
            <li>
              <Link to="#">Privacy policy</Link>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="text-xl flex-col gap-2 text-gray-600">GET IN TOUCH</h5>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>+2348064929671</li>
            <li>telecaresuport@gmail.com</li>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          copyright &copy; {year} Telecare - All Right Reserved
        </p>
      </div>
    </div>
  );
}

export default Footer;
