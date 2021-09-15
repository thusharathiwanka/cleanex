import { useState, useEffect } from "react";
import React from "react";
import axios from "axios";
import SuceessModal from "../modals/SuccessModal";
const DeliveryList = () => {
	const [orders, setOrders] = useState([]);
	const [Id, setId] = useState(null);
	const [success, setSuccess] = useState("");
	const [viewModal, setViewModal] = useState(false);

	const getOrders = async () => {
		try {
			const res = await axios.get("order/deliverer/deliver");
			setOrders(res.data);
		} catch (error) {
			console.error(error);
		}
	};

	const statusUpdate = async () => {
		try {
		} catch (error) {}
	};

	useEffect(() => {
		getOrders();
	}, []);

	return (
		<div
			style={{
				marginTop: "50px",
				marginLeft: "150px",
				marginRight: "150px",
			}}
		>
			{orders.length !== 0 ? (
				<div className="flex flex-col">
					<div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
						<div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
							<div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
								<table className="min-w-full divide-y divide-gray-200">
									<thead className="bg-gray-100">
										<tr>
											<th
												scope="col"
												className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
											>
												Address
											</th>
											<th
												scope="col"
												className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
											>
												Customer
											</th>
											<th
												scope="col"
												className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
											>
												Date
											</th>
											<th
												scope="col"
												className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
											>
												Delivery Status
											</th>

											<th scope="col" className="relative px-6 py-3">
												<span className="sr-only">Accept</span>
											</th>
											<th scope="col" className="relative px-6 py-3">
												<span className="sr-only">Accept</span>
											</th>
										</tr>
									</thead>
									{orders && (
										<tbody className="bg-white divide-y divide-gray-200">
											{orders.map((order) => {
												return (
													<tr key={order._id}>
														<td className="px-6 py-4 whitespace-nowrap">
															<div className="flex items-center">
																<div className="text-sm text-gray-900">
																	{order.Address}
																</div>
															</div>
														</td>
														<td className="px-6 py-4 whitespace-nowrap">
															<div className="text-sm text-gray-900">
																{order.CustomerName}
															</div>
														</td>
														<td className="px-6 py-4 whitespace-nowrap">
															<div className="text-sm text-gray-900">
																{order.StartDate}
															</div>
														</td>
														<td className="px-6 py-4 whitespace-nowrap ">
															<span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-500">
																{order.DelivaryStatus}
															</span>
														</td>

														<td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
															<a
																href="www.google.com"
																className="text-green-500 hover:text-green-200"
															>
																Delivered
															</a>
														</td>
														<td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
															<a
																href="www.google.com"
																className="text-red-500 hover:text-red-200"
															>
																Error
															</a>
														</td>
													</tr>
												);
											})}
										</tbody>
									)}
								</table>
							</div>
						</div>
						{viewModal && (
							<SuceessModal setview={setViewModal} message={success} />
						)}
					</div>
				</div>
			) : (
				<div> no orders found for deliver</div>
			)}
		</div>
	);
};

export default DeliveryList;
