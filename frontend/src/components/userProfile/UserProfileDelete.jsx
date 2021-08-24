import React from "react";
import { Link } from "react-router-dom";
const UserProfileDelete = () => {
  return (
    <div className="flex flex-col space-y-4 min-w-screen h-screen animated fadeIn faster  fixed  left-0 top-0  justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-transparent">
      <div className="flex flex-col p-8 bg-white shadow-md hover:shodow-lg rounded-2xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="font-medium">Delete Your Acccount ?</div>
            <div>
              <p className="text-sm text-gray-600 leading-none mt-1">
                By deleting your account you will lose your all data
              </p>
            </div>
          </div>
        </div>
        <Link className="transition duration-500 ease-in-out text-center mt-3 -mb-3 w-24 ml-2 py-2 px-4 bg-red-500 hover:bg-black text-white sm:rounded-3xl transform hover:-translate-y-1 hover:scale-110 ">
          Delete
        </Link>
      </div>
    </div>
  );
};

export default UserProfileDelete;
