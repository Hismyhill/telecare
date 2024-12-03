import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

function RelatedDoctors({ speciality, docId }) {
  const { doctors } = useContext(AppContext);
  const navigate = useNavigate();

  const [relDoc, setRelDoc] = useState([]);

  useEffect(
    function () {
      if (doctors.length > 0 && speciality) {
        const doctorsData = doctors.filter(
          (doc) => doc.speciality === speciality && doc._id !== docId
        );
        setRelDoc(doctorsData);
      }
    },
    [docId, speciality, doctors]
  );

  return (
    <div className="flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10">
      <h2 className="text-3xl font-medium">Related Doctors</h2>
      <p className="sm:w-1/3 text-center text-">
        Simply browse through our extensive list of trusted doctors
      </p>
      <div className="w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0">
        {relDoc.slice(0, 5).map((doctor, i) => (
          <div
            onClick={() => {
              navigate(`/appointment/${doctor._id}`);
              scrollTo(0, 0);
            }}
            key={i}
            className="border border-blue-200 rounded-xl overflow-hdden cursor-pointer hover:translate-y-[-10px] transition-all duration-500"
          >
            <img src={doctor.image} alt={doctor.name} className="bg-blue-50" />
            <div className="p-4">
              <div className="flex items-center gap-2 text-sm text-center text-green-50">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <p className="text-green-900">Available</p>
              </div>
              <p className="text-gray-900 text-lg font-medium">{doctor.name}</p>
              <p className="text-gray-600 tex-sm">{doctor.speciality}</p>
            </div>
          </div>
        ))}
      </div>
      <button
        className="bg-blue-50 text-gray-600 px-12 py-3 rounded-full mt-10"
        onClick={() => {
          navigate("/doctors");
          scrollTo(0, 0);
        }}
      >
        more
      </button>
    </div>
  );
}

export default RelatedDoctors;
