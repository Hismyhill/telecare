import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { AppContext } from "../context/AppContext";

function Doctors() {
  const navigate = useNavigate();
  const { speciality } = useParams();

  const { doctors } = useContext(AppContext);

  const [filterDoc, setFilterDoc] = useState([]);
  const [showFilter, setShowFilter] = useState(false);

  function handleFilter() {
    if (speciality) {
      setFilterDoc(
        doctors.filter((doctor) => doctor.speciality === speciality)
      );
    } else {
      setFilterDoc(doctors);
    }
  }

  useEffect(
    function updateFilter() {
      handleFilter();
    },
    [doctors, speciality]
  );

  return (
    <div>
      <p className="text-gray-600">Browse through the doctors speciality</p>
      <div className="flex flex-col sm:flex-row items-start gap-5 mt-5 ">
        <button
          className={`py-1 px-3 border rounded text-sm transition-all md:hidden ${
            showFilter ? "bg-primary text-white" : ""
          }`}
          onClick={() => setShowFilter((filter) => !filter)}
        >
          Filter
        </button>
        {
          <ul
            className={` flex-col gap-4 text-sm text-gray-600 ${
              showFilter ? "flex" : "hidden sm:flex"
            }`}
          >
            <li
              className={`wi[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer`}
              onClick={() =>
                speciality === "General physician"
                  ? navigate("/doctors")
                  : navigate("/doctors/General physician")
              }
            >
              General physician
            </li>
            <li
              className={`wi[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer`}
              onClick={() =>
                speciality === "Gynecologist"
                  ? navigate("/doctors")
                  : navigate("/doctors/Gynecologist")
              }
            >
              Gynecologist
            </li>
            <li
              className={`wi[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer`}
              onClick={() =>
                speciality === "Dermatologist"
                  ? navigate("/doctors")
                  : navigate("/doctors/Dermatologist")
              }
            >
              Dernmatologist
            </li>
            <li
              className={`wi[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer`}
              onClick={() =>
                speciality === "Pediatrician"
                  ? navigate("/doctors")
                  : navigate("/doctors/Pediatrician")
              }
            >
              Pediatrician
            </li>
            <li
              className={`wi[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer`}
              onClick={() =>
                speciality === "Neurologist"
                  ? navigate("/doctors")
                  : navigate("/doctors/Neurologist")
              }
            >
              Neurologist
            </li>
            <li
              className={`wi[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer`}
              onClick={() =>
                speciality === "Gastroenterologist"
                  ? navigate("/doctors")
                  : navigate("/doctors/Gastroenterologist")
              }
            >
              Gastroenterologist
            </li>
          </ul>
        }
        <div className="w-full grid grid-cols-auto gap-4 gap-y-6">
          {filterDoc.map((doctor) => (
            <div
              onClick={() => navigate(`/appointment/${doctor._id}`)}
              key={doctor._id}
              className="border border-blue-200 rounded-xl overflow-hdden cursor-pointer hover:translate-y-[-10px] transition-all duration-500"
            >
              <img
                src={doctor.image}
                alt={doctor.name}
                className="bg-blue-50"
              />
              <div className="p-4">
                <div className="flex items-center gap-2 text-sm text-center text-green-50">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <p className="text-green-900">Available</p>
                </div>
                <p className="text-gray-900 text-lg font-medium">
                  {doctor.name}
                </p>
                <p className="text-gray-600 tex-sm">{doctor.speciality}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Doctors;
