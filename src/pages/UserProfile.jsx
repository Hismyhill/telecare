import { useState } from "react";
import { assets } from "../assets/assets";

function UserProfile() {
  const [userData, setUserData] = useState({
    name: "James Richard",
    image: assets.profile_pic,
    email: "richardjames@gmail.com",
    phone: "+234 806 492 9671",
    address: {
      line1: "Secretariat Road, Awka",
      line2: "64 Dike Park Road, Awka",
    },
    gender: "Male",
    dob: "2000-02-14",
  });

  const [isEdit, setIsEdit] = useState(false);

  return (
    <div className="max-w-lg flexfex-col gap-2 text-sm">
      <img
        className="w-36 rounded"
        src={userData.image}
        alt="My Profile Photo"
      />
      {isEdit ? (
        <input
          className="bg-gray-50 text-3xl font-medium max-w-60 mt-4"
          type="text"
          value={userData.name}
          onChange={(e) =>
            setUserData((userData) => ({ ...userData, name: e.target.value }))
          }
        />
      ) : (
        <h4 className="font-medium text-3xl text-neutral-800 mt-4">
          {userData.name}
        </h4>
      )}
      <hr className="bg-zinc-400 h-[1px] border-none" />

      <div>
        <h5 className="text-neutral-500 undeline mt-3">CONTACT INFORMATION</h5>
        <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3">
          <h6 className="font-medium">Email id:</h6>
          <p className="text-blue-500">{userData.email}</p>
          <h6 className="font-medium">Phone:</h6>
          {isEdit ? (
            <input
              className="bg-gray-100 max-w-52"
              type="text"
              value={userData.phone}
              onChange={(e) =>
                setUserData((userData) => ({
                  ...userData,
                  phone: e.target.value,
                }))
              }
            />
          ) : (
            <p className="text-blue-400">{userData.phone}</p>
          )}
          <h6 className="font-medium">Address:</h6>

          {isEdit ? (
            <div>
              <input
                className="bg-gray-50"
                type="text"
                value={userData.address.line1}
                onChange={(e) =>
                  setUserData((userData) => ({
                    ...userData,
                    address: { ...userData.address, line1: e.target.value },
                  }))
                }
              />

              <br />

              <input
                className="bg-gray-50"
                type="text"
                value={userData.address.line2}
                onChange={(e) =>
                  setUserData((userData) => ({
                    ...userData,
                    address: { ...userData.address, line2: e.target.value },
                  }))
                }
              />
            </div>
          ) : (
            <p className="text-gray-500">
              {userData.address.line1}
              <br />
              {userData.address.line2}
            </p>
          )}
        </div>
      </div>

      <div>
        <h4 className="text-neutral-500 undeline mt-3">BASIC INFORMATION</h4>
        <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3">
          <h6 className="font-medium">Gender: </h6>
          {isEdit ? (
            <select
              className="max-w-20 bg-gray-100"
              name="gender"
              id="gender"
              onChange={(e) =>
                setUserData((userData) => ({
                  ...userData,
                  gender: e.target.value,
                }))
              }
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          ) : (
            <p className="text-gray-400">{userData.gender}</p>
          )}

          <h6 className="font-medium">Birthday:</h6>
          {isEdit ? (
            <input
              className="max-w-28"
              type="date"
              value={userData.dob}
              onChange={(e) =>
                setUserData((userData) => ({
                  ...userData,
                  dob: e.target.value,
                }))
              }
            />
          ) : (
            <p className="text-gray-400">{userData.dob}</p>
          )}
        </div>
      </div>

      <div className="mt-10">
        {isEdit ? (
          <button
            className="border border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-all duration-500"
            onClick={() => setIsEdit(false)}
          >
            Save information
          </button>
        ) : (
          <button
            className="border border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-all duration-500"
            onClick={() => setIsEdit(true)}
          >
            Edit
          </button>
        )}
      </div>
    </div>
  );
}

export default UserProfile;
