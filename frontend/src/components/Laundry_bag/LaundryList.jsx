import React, { useContext, useState } from "react";
import image from "../../assets/images/bucket.png";
import icon1 from "../../assets/images/minus.png";
import icon2 from "../../assets/images/Group.png";
import binIcon from "../../assets/images/binIcon.png";
import { CartContext } from "../../contexts/CartContext";

const List = () => {
	const { packages, dispatch } = useContext(CartContext);
	const [value, setValue] = useState(1);
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
			<div className="text-lg ml-20 max-w-sm pt-3 pb-2 border border-blue-200 mt-10 mb-20 max-h-24 inline-block">
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
			<table className="w-9/12 ml-auto mr-auto mb-10 mt-5">
				<thead>
					<tr className="text-gray-400 text-base ">
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
							<tr key={packages.id} className="text-gray-600 bg-gray-100  ">
								<td className="w-60 h-20 text-center">
									<div className="inline-flex gap-10 ">
										<button
											onClick={() => {
												increase(value);
											}}
										>
											<img className="w-7 h-7" src={icon2} alt="" />
										</button>
										<input
											class="ms-1 border text-center w-8 appearance-none"
											type="text"
											value={value}
											bg-gray-100
											onChange={(e) => {
												setValue(e.target.value);
											}}
										/>
										<button
											onClick={() => {
												decrease(value);
											}}
										>
											<img className="w-7 h-7" src={icon1} alt="" />
										</button>
									</div>
								</td>

								<td className="w-60 h-20 text-center">
									<p>{packages.pack.name}</p>
								</td>
								<td className="w-60  h-20 text-center">
									<p>Rs {packages.pack.price}</p>
								</td>
								<td className="w-60  h-20 text-center">
									<p>Rs {packages.pack.price * value}</p>
								</td>

								<td className="w-60   h-20 text-center">
									<button
										onClick={() =>
											dispatch({ type: "REMOVE_PACK", id: packages.id })
										}
									>
										<img
											className="w-7 h-7 on hover:color-red-200"
											src={binIcon}
											alt=""
										/>
									</button>
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
			<hr className="mb-10 max-w-5xl  ml-auto mr-auto border-blue-100  " />
		</div>
	);
};

export default List;