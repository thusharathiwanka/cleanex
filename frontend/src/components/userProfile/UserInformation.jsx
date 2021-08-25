import axios from "axios";
import React, { useState, useEffect } from "react";

const UserInformation = () => {
  const [customer, setUserDetail] = useState({});

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
        className=" absolute bg-white shadow-lg sm:rounded-2xl sm:p-20 top-2 w-auto ml-96 my-8"
        data-aos="fade-down"
      >
        <h1 className="text-5xl font-extrabold pb-10 text-center">
          Customer user profie
        </h1>

        <table>
          <td>{customer.name}</td>
        </table>

        <div>
          <div className=" mb-4 ">
            <label className=" font-semibold text-24px" for="username">
              User Name
              <input
                className=" block md:text-left mb-1 md:mb-0 pr-4 p-1 sm:rounded-3xl border-2 border-light-blue border-opacity-100 bg-gray-100 text-gray-600 "
                type="text"
                value={customer.name}
              />
            </label>
          </div>

          <div className="mb-6">
            <label className=" font-semibold text-24px" for="email">
              Email
              <input
                className=" block md:text-left mb-1 md:mb-0 pr-4 p-1 sm:rounded-3xl border-2 border-light-blue border-opacity-100 bg-gray-100 text-gray-600"
                type="text"
                value={customer.email}
              />
            </label>
          </div>

          <div className="mb-6">
            <label className=" font-semibold text-24px" for="password">
              Password
              <input
                className=" block md:text-left mb-1 md:mb-0 pr-4 p-1 sm:rounded-3xl border-2 border-light-blue border-opacity-100 bg-gray-100 text-gray-600 "
                type="password"
                value={customer.password}
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
                value={customer.mobile}
              />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInformation;
