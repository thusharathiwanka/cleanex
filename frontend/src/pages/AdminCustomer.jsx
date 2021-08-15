import React from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaUserCircle } from "react-icons/fa";
import { AiOutlineEye } from "react-icons/ai";

import Sidebar from "../components/sidebar/Sidebar";

const AdminCustomer = () => {
	return (
		<div className=" text-gray-800">
			<div className="ml-80 mt-20">
				<h1 className="text-5xl font-extrabold pb-10 text-center">
					Registered Customers
				</h1>
				<Sidebar />
				<div className="w-full px-10">
					<div class="flex flex-col mt-5">
						<div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
							<div class="py-2 align-middle inline-block w-full sm:px-6 lg:px-8">
								<div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
									<table class="min-w-full divide-y divide-gray-200">
										<thead class="bg-lighter-blue">
											<tr>
												<th
													scope="col"
													class="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider"
												>
													Customer Name
												</th>
												<th
													scope="col"
													class="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider"
												>
													Email
												</th>
												<th
													scope="col"
													class="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider"
												>
													Registered At
												</th>
												<th
													scope="col"
													class="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider"
												>
													Mobile
												</th>
												<th
													scope="col"
													class="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider"
												>
													Actions
												</th>
											</tr>
										</thead>
										<tbody class="bg-white divide-y divide-gray-200">
											<tr>
												<td class="px-6 py-4 whitespace-nowrap">
													<div class="flex items-center">
														<div class="flex-shrink-0 h-10 w-10">
															<div className="text-2xl font-medium flex items-center text-gray-800 my-2">
																<FaUserCircle />
															</div>
														</div>
														<div class="ml-2">
															<div class="text-sm font-medium text-gray-900">
																Customer 01
															</div>
														</div>
													</div>
												</td>
												<td class="px-6 py-4 whitespace-nowrap">
													<div class="text-sm text-gray-900">
														customer1@gmail.com
													</div>
												</td>
												<td class="px-6 py-4 whitespace-nowrap">
													<div class="text-sm text-gray-900">20-Aug-2021</div>
												</td>
												<td class="px-6 py-4 whitespace-nowrap">
													<div class="text-sm text-gray-900">077 777777</div>
												</td>
												<td class="px-6 py-4 whitespace-nowrap text-right text-xl font-medium flex items-center">
													<button class="text-green-400 mr-5 my-2">
														<AiOutlineEye />
													</button>
													<button class="text-red-400 mr-5 my-2">
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

export default AdminCustomer;
