import React from "react";

const AllOrderHistory = () => {
  return (
    <div class="flex flex-col">
      <div class="flex items-center justify-center ">
        <div class="flex border-2 rounded mt-20 -ml-8">
          <input
            type="Date"
            class="px-4 py-2 w-80"
            placeholder="Search"
          ></input>
          <button class="flex items-center justify-center px-4 border-l">
            <svg
              class="w-6 h-6 text-gray-600"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
            </svg>
          </button>
        </div>
      </div>
      <div className="flex mx-auto items-center justify-center shadow-lg mt-56  mb-4">
        <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <h2 class="text-5xl font-extrabold pb-10 pt-10 text-center ml-8 ">
            All Orders
          </h2>
          <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg m-8">
              <table class="min-w-full divide-y divide-gray-200">
                <thead class="bg-blue-500">
                  <tr>
                    <th
                      scope="col"
                      class="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider"
                    >
                      Date
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider"
                    >
                      OrderID
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider"
                    >
                      Total Price
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider"
                    >
                      Role
                    </th>
                    <th scope="col" class="relative px-6 py-3">
                      <span class="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                  <tr>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="text-sm text-gray-900">2021-03-08</div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="text-sm text-gray-900">009ID</div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="text-sm text-gray-900">8900</div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        Active
                      </span>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button class="text-green-600 hover:text-green-400">
                        View
                      </button>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button class="text-red-500 hover:text-red-400">
                        Delete
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllOrderHistory;
