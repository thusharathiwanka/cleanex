import axios from "axios";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { imageURL } from "../../config/paths";

const ViewOrder = () => {
  const [Items, setItems] = useState([]);

  const { id } = useParams();
  const getItems = async () => {
    // console.log(id + "uhj");
    const res = await axios.get(`/order/${id}`);
    // console.log(res.data.items);
    setItems(res.data.items);
  };
  useEffect(() => {
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
                {Items.map((item, key) => (
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr key={key}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10">
                            <img
                              className="h-10 w-10 rounded-lg"
                              // src={"../../assets/images/" + item.pack.src}
                              src={imageURL + item.pack.src}
                              alt=""
                            />
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900 border-2 text-center rounded-lg">
                          {item.quantity}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {item.pack.name}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {item.pack.price}
                        </div>
                      </td>
                    </tr>
                  </tbody>
                ))}
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewOrder;
