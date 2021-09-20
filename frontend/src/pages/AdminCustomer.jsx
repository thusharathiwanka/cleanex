import React, { useState, useEffect } from "react";
import axios from "axios";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaUserCircle } from "react-icons/fa";
import { AiOutlineEye } from "react-icons/ai";
import { IoMailOutline } from "react-icons/io5";

import Sidebar from "../components/sidebar/Sidebar";
import Spinner from "../components/loading/Spinner";
import ConfirmModal from "../components/modals/ConfirmModal";
import CustomerViewModal from "../components/modals/CustomerViewModal";

const AdminCustomer = () => {
	document.title = "CLEANEX - Customers";
	const [customers, setCustomers] = useState([]);
	const [customerId, setCustomerId] = useState("");
	const [showModal, setShowModal] = useState(false);
	const [showViewModal, setShowViewModal] = useState(false);
	const [isLoading, setIsLoading] = useState(true);

	const getCustomers = async () => {
		try {
			const res = await axios.get("/customers");
			setCustomers(res.data.customers);
			setIsLoading(false);
		} catch (err) {
			console.error(err.message);
		}
	};

	const deleteCustomer = async (id) => {
		try {
			await axios.delete(`customers/${id}`);
			getCustomers();
			setShowModal(false);
		} catch (err) {
			console.error(err.message);
		}
	};

	useEffect(() => {
		getCustomers();
	}, []);

	return (
		<div className=" text-gray-800 relative min-h-screen">
			{showModal && (
				<ConfirmModal
					setShowModal={setShowModal}
					showModal={showModal}
					execute={deleteCustomer}
					id={customerId}
				/>
			)}
			{showViewModal && (
				<CustomerViewModal
					setShowViewModal={setShowViewModal}
					showViewModal={showViewModal}
					id={customerId}
				/>
			)}
			<div className="ml-80 mt-20">
				<h1
					className="text-5xl font-extrabold pb-10 text-center"
					data-aos="fade-up"
				>
					Registered Customers
				</h1>
				<Sidebar />
				{isLoading ? (
					<Spinner />
				) : (
					<div className="w-full px-10">
						<div className="flex flex-col mt-5">
							<div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
								<div className="py-2 align-middle inline-block w-full sm:px-6 lg:px-8">
									<div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
										<table className="min-w-full divide-y divide-gray-200 overflow-x-scroll">
											<thead className="bg-lighter-blue">
												<tr>
													<th
														scope="col"
														className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider"
													>
														Customer Name
													</th>
													<th
														scope="col"
														className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider"
													>
														Email
													</th>
													<th
														scope="col"
														className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider"
													>
														Registered At
													</th>
													<th
														scope="col"
														className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider"
													>
														Mobile
													</th>
													<th
														scope="col"
														className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider"
													>
														Actions
													</th>
												</tr>
											</thead>
											<tbody className="bg-white divide-y divide-gray-200">
												{customers.map((customer) => (
													<tr key={customer._id}>
														<td className="px-6 py-4 whitespace-nowrap">
															<div className="flex items-center">
																<div className="flex-shrink-0 h-10 w-10">
																	<div className="text-2xl font-medium flex items-center text-gray-800 my-2">
																		<FaUserCircle />
																	</div>
																</div>
																<div className="ml-2">
																	<div className="text-sm font-medium text-gray-900">
																		{customer.name}
																	</div>
																</div>
															</div>
														</td>
														<td className="px-6 py-4 whitespace-nowrap">
															<div className="text-sm text-gray-900">
																{customer.email}
															</div>
														</td>
														<td className="px-6 py-4 whitespace-nowrap">
															<div className="text-sm text-gray-900">
																{new Date(customer.createdAt).toDateString()}
															</div>
														</td>
														<td className="px-6 py-4 whitespace-nowrap">
															<div className="text-sm text-gray-900">
																{customer.mobile}
															</div>
														</td>
														<td className="px-6 py-4 whitespace-nowrap text-right text-xl font-medium flex items-center">
															<button
																className="text-green-400 mr-5 my-2"
																onClick={() => {
																	setCustomerId(customer._id);
																	setShowViewModal(true);
																}}
															>
																<AiOutlineEye />
															</button>
															<a href={`mailto:${customer.email}`}>
																<button className="text-yellow-400 mr-5 my-2">
																	<IoMailOutline />
																</button>
															</a>
															<button
																className="text-red-400 mr-5 my-2"
																onClick={() => {
																	setCustomerId(customer._id);
																	setShowModal(true);
																}}
															>
																<RiDeleteBin5Line />
															</button>
														</td>
													</tr>
												))}
											</tbody>
										</table>
									</div>
								</div>
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default AdminCustomer;
