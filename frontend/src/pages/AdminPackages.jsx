import React, { useEffect } from "react";
import axios from "axios";
import { FiPlus } from "react-icons/fi";
import { BiEditAlt } from "react-icons/bi";
import { RiDeleteBin5Line } from "react-icons/ri";
import { Link } from "react-router-dom";

import Sidebar from "../components/sidebar/Sidebar";
import packageImage from "../assets/images/default-package-image.png";

const AdminPackages = () => {
	const getPackages = async () => {
		try {
			const res = await axios.get("packages");
			console.log(res.data);
		} catch (err) {
			console.error(err.response);
		}
	};

	useEffect(() => {});

	return (
		<div className=" text-gray-800">
			<div className="ml-80 mt-20">
				<div
					className="flex justify-end mx-10"
					data-aos="fade-left"
					data-aos-delay="100"
				>
					<Link
						className="ml-5 font-semibold text-lg bg-light-blue text-white py-3 px-8 rounded-full flex justify-center items-center"
						to="/auth/admin/packages/new"
					>
						<FiPlus className="text-2xl mr-2" />
						New Package
					</Link>
				</div>
				<h1
					className="text-5xl font-extrabold pb-10 text-center"
					data-aos="fade-up"
				>
					Pricing & Packages
				</h1>
				<Sidebar />
				<div className="w-full px-10" data-aos="fade-up" data-aos-delay="100">
					<div className="flex flex-col mt-5">
						<div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
							<div className="py-2 align-middle inline-block w-full sm:px-6 lg:px-8">
								<div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
									<table className="min-w-full divide-y divide-gray-200">
										<thead className="bg-lighter-blue">
											<tr>
												<th
													scope="col"
													className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider"
												>
													Package
												</th>
												<th
													scope="col"
													className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider"
												>
													Price (LKR)
												</th>
												<th
													scope="col"
													className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider"
												>
													Created At
												</th>
												<th
													scope="col"
													className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider"
												>
													Status
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
											<tr>
												<td className="px-6 py-4 whitespace-nowrap">
													<div className="flex items-center">
														<div className="flex-shrink-0 h-10 w-10">
															<img
																className="h-10 w-10 rounded-full"
																src={packageImage}
																alt="package-img"
															/>
														</div>
														<div className="ml-4">
															<div className="text-sm font-medium text-gray-900">
																Package 01
															</div>
														</div>
													</div>
												</td>
												<td className="px-6 py-4 whitespace-nowrap">
													<div className="text-sm text-gray-900">900.00</div>
												</td>
												<td className="px-6 py-4 whitespace-nowrap">
													<div className="text-sm text-gray-900">
														20-Aug-2021
													</div>
												</td>
												<td className="px-6 py-4 whitespace-nowrap">
													<span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
														Active
													</span>
												</td>
												<td className="px-6 py-4 whitespace-nowrap text-right text-xl font-medium flex items-center">
													<Link
														to="/auth/admin/packages/update"
														className="text-green-400 mr-5 my-2 cursor-pointer"
													>
														<BiEditAlt />
													</Link>
													<button className="text-red-400 mr-5 my-2 cursor-pointer">
														<RiDeleteBin5Line />
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
			</div>
		</div>
	);
};

export default AdminPackages;
