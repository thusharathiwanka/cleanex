import axios from "axios";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ViewOrder = () => {
  const [Items, setItems] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const getItems = async () => {
      console.log(id + "uhj");
      const res = await axios.get(`/order/${id}`);
      setItems(res.data.Order);
      console.log(res.data.Order);
    };
    getItems();
  }, []);
  return (
    <div className="flex flex-col ">
      <div className="flex mx-auto items-center justify-center shadow-lg mt-56  mb-4">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <h2 className="text-5xl font-extrabold pb-10 pt-10 text-center ml-8 ">
            Order View
          </h2>
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg m-8">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-lighter-blue">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider"
                    >
                      Img
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider"
                    >
                      Quantity
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider"
                    >
                      Laundry Item
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider"
                    >
                      Price Per Item
                    </th>
                  </tr>
                </thead>
                {Items &&
                  Items.map((packages) => (
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10">
                              <img
                                className="h-10 w-10 rounded-lg"
                                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
                                alt=""
                              />
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900 border-2 text-center rounded-lg">
                            {packages.quantity}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">
                            {packages.pack.name}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">
                            {packages.pack.price}
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  ))}
              </table>
            </div>
            <div>
              {/* <button className="transition duration-500 ease-in-out py-3 px-5 m-8 ml-96 bg-black hover:bg-blue-500 text-white rounded-3xl transform hover:-translate-y-1 hover:scale-110">
                Close
              </button> */}
              <Link
                className="transition duration-500 ease-in-out py-3 px-5 m-8 ml-96 bg-green-500 hover:bg-blue-500 text-white rounded-3xl transform hover:-translate-y-1 hover:scale-110"
                to={`/payment`}
              >
                Pay
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewOrder;
