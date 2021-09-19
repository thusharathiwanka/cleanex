import axios from "axios";
import React, { useState, useEffect } from "react";

const UserInformation = () => {
  const [userDetail, setUserDetail] = useState({});

  const getUserprofileDetails = async () => {
    try {
      const res = await axios.get("/customers/userProfile");
      setUserDetail(res.data.customer);
    } catch (err) {
      console.error(err.message);
    }
  };
  useEffect(() => {
    getUserprofileDetails();
  }, []);
  return (
    <div>
      <div
        className="flex mx-auto items-center justify-center shadow-lg mt-28  mb-4 max-w-lg p-20"
        data-aos="fade-down"
      >
        <div className="flex flex-wrap -mx-3 mb-6">
          <h1 className="text-5xl font-extrabold pb-10 pt-10 text-center ml-8">
            Profile Details
          </h1>

          <div className="w-full md:w-full px-3 mb-2 mt-2 m-5">
            <div className=" mb-4 ">
              <label className=" font-semibold text-24px" for="username">
                User Name
                <input
                  className=" block md:text-left mb-1 md:mb-0 pr-4 p-1 sm:rounded-3xl border border-light-blue border-opacity-100 bg-gray-100 text-gray-600 "
                  type="text"
                  value={userDetail.name}
                />
              </label>
            </div>

            <div className="mb-6">
              <label className=" font-semibold text-24px" for="email">
                Email
                <input
                  className=" block md:text-left mb-1 md:mb-0 pr-4 p-1 sm:rounded-3xl border border-light-blue border-opacity-100 bg-gray-100 text-gray-600"
                  type="text"
                  value={userDetail.email}
                />
              </label>
            </div>

            <div className="mb-8">
              <label className=" font-semibold text-24px" for="mobile">
                Mobile
                <input
                  className=" block md:text-left mb-1 md:mb-0 pr-4 p-1 sm:rounded-3xl border border-light-blue border-opacity-100 bg-gray-100 text-gray-600"
                  id="mobile"
                  type="text"
                  value={userDetail.mobile}
                />
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInformation;
