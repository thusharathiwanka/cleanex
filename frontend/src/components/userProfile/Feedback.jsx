import React from "react";
import { Link } from "react-router-dom";
const Feedback = () => {
  return (
    <div>
      <div className="flex mx-auto items-center justify-center shadow-lg mt-56  mb-4 max-w-lg">
        <form class="w-full max-w-xl bg-white rounded-lg px-4 pt-2">
          <div class="flex flex-wrap -mx-3 mb-6">
            <h2 class="text-5xl font-extrabold pb-10 pt-10 text-center ml-8">
              Feedback
            </h2>
            <div class="w-full md:w-full px-3 mb-2 mt-2">
              <textarea
                class="bg-gray-100 rounded border-2 border-light-blue leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white"
                name="body"
                placeholder="Type Your Feedback"
                required
              ></textarea>
            </div>
            <div class="w-full md:w-full flex items-start px-3">
              <div class="flex items-start w-1/2 text-gray-700 px-2 mr-auto"></div>
              <div class="-mr-1 space-x-4">
                <Link class="transition duration-500 ease-in-out py-3 px-5 bg-black hover:bg-light-blue text-white rounded-3xl transform hover:-translate-y-1 hover:scale-110">
                  Cancle
                </Link>
                <Link
                  class="transition duration-500 ease-in-out py-3 px-5 bg-light-blue hover:bg-black text-white rounded-3xl transform hover:-translate-y-1 hover:scale-110"
                  to={`/auth/user/profile`}
                >
                  Send
                </Link>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Feedback;
