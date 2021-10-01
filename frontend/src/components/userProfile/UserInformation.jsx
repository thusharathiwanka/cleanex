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
      <div className="flex mx-auto items-center justify-center shadow-lg mt-56  mb-4 max-w-lg">
        <form className="w-2/4 text-gray-800 font-semibold relative">
          <div className="flex flex-wrap -mx-3 mb-6">
            <h1 className="text-5xl font-extrabold pb-10 pt-10 text-center ml-7">
              Profile
            </h1>

            <div className="w-full md:w-full px-3 mb-2 mt-2">
              <div className="mb-6">
                <label className=" pb-1" htmlFor="username">
                  User Name
                  <input
                    class="outline-none rounded-full border px-4 py-3 focus:border-light-blue"
                    value={userDetail.name}
                  />
                </label>
              </div>

              <div className="mb-6">
                <label className=" pb-1" htmlfor="email">
                  Email
                  <input
                    class="outline-none rounded-full border px-4 py-3 focus:border-light-blue"
                    value={userDetail.email}
                  />
                </label>
              </div>

              <div className="mb-6">
                <label className=" pb-1" for="mobile">
                  Mobile
                  <input
                    class="outline-none rounded-full border px-4 py-3 focus:border-light-blue"
                    id="mobile"
                    value={userDetail.mobile}
                  />
                </label>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserInformation;
