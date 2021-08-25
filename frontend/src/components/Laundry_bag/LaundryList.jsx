import React, { useContext, useState } from "react";
import { CartContext } from "../../contexts/CartContext";
import image from "../../assets/images/bucket.png";
import { imageURL } from "../../config/paths";

import { IoBagAddOutline } from "react-icons/io5";
import { IoBagRemoveOutline } from "react-icons/io5";
import { RiDeleteBin6Line } from "react-icons/ri";
import { AiOutlineRollback } from "react-icons/ai";
import { Link } from "react-router-dom";

const List = () => {
	const { packages, dispatch } = useContext(CartContext);
	const [value, setValue] = useState(1);
	const [pack, setPack] = useState([]);

	const increase = (value) => {
		if (value < 5) {
			value = value + 1;
		}
		setValue(value);
	};

	const decrease = (value) => {
		if (value > 1) {
			value = value - 1;
		}

		setValue(value);
	};

	return (
		<div>
			<div className="text-lg ml-40 max-w-sm pt-3 pb-2 border border-blue-200 mt-10 mb-20 max-h-24 inline-block">
				<p className="text-gray-500  ml-8 max-w-7  max-h-8">
					Your Laundry Bag
					<img
						className="max-w-min  max-h-7  float-right mr-7 ml-5  "
						src={image}
						alt=""
					/>
				</p>
			</div>
			<hr className="max-w-5xl  ml-auto mr-auto border-blue-100 h-3 " />
			<table className="w-9/12 ml-auto mr-auto mb-10 mt-5 ">
				<thead>
					<tr className="text-gray-400 text-base ">
						<th className="w-60 h-10"></th>
						<th className="w-60 h-10 ">Quantity</th>
						<th className="w-60 h-10">Laundry Item</th>
						<th className="w-60 h-10">Price per Item</th>
						<th className="w-60 h-10">Total Price</th>
						<th className="w-60 h-10"></th>
					</tr>
				</thead>
				<tbody>
					{packages.map((packages) => {
						return (
							<tr
								style={{ borderSpacing: "1em .5em" }}
								key={packages.id}
								className="text-gray-600 bg-gray-100 space-y-3     rounded-lg"
							>
								<td className="w-60 h-20 text-right  bg-white border-t-8 border-b-2 border-white">
									<img
										src={imageURL + packages.pack.src}
										alt="package-img"
										className="w-20 h-20 rounded-lg mr-2 object-cover border-2 border-gray-200 "
									/>
								</td>
								<td className="w-60 h-20 text-center border-t-8 border-b-2 border-white ">
									<div className="inline-flex gap-6 ">
										<button
											onClick={() => {
												increase(value);
											}}
										>
											<IoBagAddOutline className="w-7 h-7 text-light-blue hover:text-blue-200" />
										</button>
										<input
											className="ms-1  border-2  rounded-lg text-center w-8 appearance-none"
											type="text"
											value={packages.quantity}
											bg-gray-100
											onChange={(e) => {
												/*setN(packages.quantity);*/
												setValue(e.target.value);
											}}
										/>
										<button
											onClick={() => {
												decrease(value);
											}}
										>
											<IoBagRemoveOutline className="w-7 h-7 text text-gray-400 hover:text-gray-300" />
										</button>
									</div>
								</td>

								<td className="w-60 h-20 text-center border-t-8 border-b-2 border-white  ">
									<p>{packages.pack.name}</p>
								</td>
								<td className="w-60  h-20 text-center border-t-8 border-b-2 border-white  ">
									<p>Rs {packages.pack.price}</p>
								</td>
								<td className="w-60  h-20 text-center border-t-8 border-b-2 border-white ">
									<p>Rs {packages.pack.price * packages.quantity}</p>
								</td>

								<td className="w-20   h-20 text-right bg-white ">
									<button
										onClick={() =>
											dispatch({ type: "REMOVE_PACK", id: packages.id })
										}
									>
										<RiDeleteBin6Line className="w-7 h-7 text-red-600 hover:text-red-300" />
									</button>
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
			<div className="text-right mr-60 font-bold mb-5">
				<Link to="/auth/user/packages">
					<p className=" inline-flex text-right  text-gray-400">
						<AiOutlineRollback className="ml-10 mr-2  font-bold" />
						Back to all Packages
					</p>
				</Link>
			</div>

			<hr className="mb-10 max-w-5xl  ml-auto mr-auto border-blue-100  " />
		</div>
	);
};

export default List;
