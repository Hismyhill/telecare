import { assets } from "../assets/assets";

function Contact() {
  return (
    <div>
      <div className="text-center text-2xl pt-10 text-gray-500">
        <h6>
          Contact <span className="text-gray-700 font-semibold">US</span>
        </h6>
      </div>

      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm">
        <img
          src={assets.contact_image}
          alt="patient with doctors"
          className="w-full md:max-w-[360px]"
        />

        <ul className="flex flex-col justify-center items-start gap-6">
          <li className="font-semibold text-lg text-gray-600">Our Office</li>
          <li className="text-gray-500">
            24 Secretariat Rd. <br />
            Aroma, Awka, Anambra
          </li>
          <li className="text-gray-500">
            Tel: (806) 492-9671 <br />
            Email: telecare@gmail.com
          </li>
          <li className="font-semibold text-lg text-gray-600">
            Careers at Telecare
          </li>
          <li className="text-gray-500">
            Learn more about our team and job openings
          </li>
          <button className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500">
            Explore jobs
          </button>
        </ul>
      </div>
    </div>
  );
}

export default Contact;
