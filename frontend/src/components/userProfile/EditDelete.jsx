import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const EditDelete = () => {
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
    <div
      className=" absolute bg-white shadow-lg sm:rounded-2xl sm:p-20 top-2 w-auto ml-96 my-8"
      data-aos="fade-down"
    >
      <h1 className="text-5xl font-extrabold pb-10 text-center">Edit profie</h1>
      {/* <div className="relative w-24 h-24">
        <img
          className="rounded-full border border-gray-100 shadow-sm"
          src={EditButto}
          alt="user image"
        />
      </div> */}

      <div className=" mb-4 ">
        <label className=" font-semibold text-24px" for="username">
          User Name
          <input
            className=" block md:text-left mb-1 md:mb-0 pr-4 p-1 sm:rounded-3xl border-2 border-light-blue border-opacity-100 bg-gray-100 text-gray-600 "
            id="username"
            type="text"
            value={userDetail.name}
          />
        </label>
      </div>

      <div className="mb-6">
        <label className=" font-semibold text-24px" for="email">
          Email
          <input
            className=" block md:text-left mb-1 md:mb-0 pr-4 p-1 sm:rounded-3xl border-2 border-blue-500 border-opacity-100 bg-gray-100 text-gray-600"
            id="email"
            type="text"
            value={userDetail.email}
          />
        </label>
      </div>

      <div className="mb-6">
        <label className=" font-semibold text-24px" for="password">
          Password
          <input
            className=" block md:text-left mb-1 md:mb-0 pr-4 p-1 sm:rounded-3xl border-2 border-light-blue border-opacity-100 bg-gray-100 text-gray-600 "
            id="password"
            type="password"
            value={userDetail.password}
          />
        </label>
      </div>

      <div className="mb-8">
        <label className=" font-semibold text-24px" for="mobile">
          Mobile
          <input
            className=" block md:text-left mb-1 md:mb-0 pr-4 p-1 sm:rounded-3xl border-2 border-light-blue border-opacity-100 bg-gray-100 text-gray-600"
            id="mobile"
            type="text"
            value={userDetail.mobile}
          />
        </label>
      </div>
      <div className="space-x-4">
        <Link
          className="transition duration-500 ease-in-out  py-2 px-4 bg-red-500 hover:bg-black text-white sm:rounded-3xl transform hover:-translate-y-1 hover:scale-110 "
          to={`/auth/user/userprofiledelete`}
        >
          delete
        </Link>
        <Link
          className="transition duration-500 ease-in-out  py-2 px-4 bg-light-blue hover:bg-black text-white sm:rounded-3xl transform hover:-translate-y-1 hover:scale-110 "
          to={`/auth/user/profile`}
        >
          Edit
        </Link>
      </div>
    </div>
  );
};

export default EditDelete;
