import { Link } from "react-router-dom";
import { specialityData } from "../assets/assets";

function SpecialityMenu() {
  return (
    <div
      id="speciality"
      className="flex flex-col items-center gap-4 py-16 text-gray-800"
    >
      <h2 className="text-3xl font-medium">Find by Specialty</h2>
      <p className="sm:w1/3 text-center text-sm">
        Simply browse through our extensive list of trusted doctors, schedule
        your apointment hassle-free today
      </p>
      <div className="flex sm:justify-center gap-4 pt-5 w-full overflow-scroll">
        {specialityData.map((data, i) => (
          <Link
            onClick={() => scrollTo(0, 0)}
            to={`/doctors/${data.speciality}`}
            key={i}
            className="flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500"
          >
            <img
              src={data.image}
              alt={data.speciality}
              className="w-16 sm:w-24 mb-2"
            />
            <p>{data.speciality}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default SpecialityMenu;
