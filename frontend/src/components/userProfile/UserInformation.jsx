import React from "react";

const UserInformation = () => {
  return (
    <div>
      <div
        className=" absolute bg-white shadow-lg sm:rounded-2xl sm:p-20 top-2 w-auto ml-96 my-8"
        data-aos="fade-down"
      >
        <h1 className="text-5xl font-extrabold pb-10 text-center">
          Customer user profie
        </h1>

        <div className=" mb-4 ">
          <label className=" font-semibold text-24px" for="username">
            User Name
            <input
              className=" block md:text-left mb-1 md:mb-0 pr-4 p-1 sm:rounded-3xl border-2 border-blue-500 border-opacity-100 bg-gray-100 text-gray-600 "
              id="username"
              type="text"
              value="Someone Name"
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
              value="someone@gmail.com"
            />
          </label>
        </div>

        <div className="mb-6">
          <label className=" font-semibold text-24px" for="password">
            Password
            <input
              className=" block md:text-left mb-1 md:mb-0 pr-4 p-1 sm:rounded-3xl border-2 border-blue-500 border-opacity-100 bg-gray-100 text-gray-600 "
              id="password"
              type="password"
              value="fkjnrkgjntjkht"
            />
          </label>
        </div>

        <div className="mb-8">
          <label className=" font-semibold text-24px" for="mobile">
            Mobile
            <input
              className=" block md:text-left mb-1 md:mb-0 pr-4 p-1 sm:rounded-3xl border-2 border-blue-500 border-opacity-100 bg-gray-100 text-gray-600"
              id="mobile"
              type="text"
              value="0778937456"
            />
          </label>
        </div>
      </div>
      {/*     
    //   className=" absolute bg-white shadow-lg sm:rounded-2xl sm:p-20 top-20 w-auto ml-96 my-8"
    //   data-aos="fade-down"
    // >
    //   <div className=" text-gray-800 text-center ">
    //     <h1 className="text-5xl font-extrabold pb-10 text-center">
    //       Customer User Profile
    //     </h1>
    //     <h6 className=" font-semibold text-24px">Name</h6>
    //     <div className=" absolute sm:rounded-3xl w-auto h-12 left-23 px-8 p-3 border-2 border-blue-500 border-opacity-100 bg-gray-100 text-gray-600 text-center">
    //       <h1>someoneemail@gmail.com</h1>
    //       <h6 className=" font-semibold text-24px">Name</h6>
    //       <div className=" absolute sm:rounded-3xl w-auto h-auto left-23 px-8 p-3 border-2 border-blue-500 border-opacity-100 bg-gray-100 text-gray-600 text-center">
    //         <h1>
    //           someoneemail@gmsssssssssssssssssssssssssssssssssssssssssssssssssssssssail.com
    //         </h1>
    //       </div>
    //     </div>
    //   </div> */}
    </div>
  );
};

export default UserInformation;
