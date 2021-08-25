import React, { useState, useEffect } from "react";
import axios from "axios";
import { RiDeleteBin5Line } from "react-icons/ri";
import { MdFeedback } from "react-icons/md";
import { AiOutlineEye } from "react-icons/ai";
import { IoMailOutline } from "react-icons/io5";

import Sidebar from "../components/sidebar/Sidebar";

const AdminFeedback = () => {
	document.title = "CLEANEX - Feedbacks";
	const [feedbacks, setFeedbacks] = useState([]);

	const getFeedbacks = async () => {
		try {
			const res = await axios.get("feedbacks");
			setFeedbacks(res.data.feedbacks);
		} catch (err) {
			console.error(err);
		}
	};

	useEffect(() => {
		getFeedbacks();
	}, []);

	return (
		<div className=" text-gray-800">
			<div className="ml-80 mt-20">
				<h1
					className="text-5xl font-extrabold pb-10 text-center"
					data-aos="fade-up"
				>
					Feedbacks
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
													Topic
												</th>
												<th
													scope="col"
													className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider"
												>
													Given By
												</th>
												<th
													scope="col"
													className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider"
												>
													Given At
												</th>
												<th
													scope="col"
													className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider"
												>
													Category
												</th>
												<th
													scope="col"
													className="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider"
												>
													Actions
												</th>
											</tr>
										</thead>
										{feedbacks.map((feedback) => (
											<tbody className="bg-white divide-y divide-gray-200">
												<tr>
													<td className="px-6 py-4 whitespace-nowrap">
														<div className="flex items-center">
															<div className="flex-shrink-0 h-10 w-10">
																<div className="text-2xl font-medium flex items-center text-gray-800 my-2">
																	<MdFeedback />
																</div>
															</div>
															<div className="ml-2">
																<div className="text-sm font-medium text-gray-900">
																	{feedback.topic}
																</div>
															</div>
														</div>
													</td>
													<td className="px-6 py-4 whitespace-nowrap">
														<div className="text-sm text-gray-900">
															{feedback.givenBy.email}
														</div>
													</td>
													<td className="px-6 py-4 whitespace-nowrap">
														<div className="text-sm text-gray-900">
															{new Date(feedback.createdAt).toDateString()}
														</div>
													</td>
													<td className="px-6 py-4 whitespace-nowrap">
														<div className="text-sm text-gray-900">
															{feedback.category}
														</div>
													</td>
													<td className="px-6 py-4 whitespace-nowrap text-right text-xl font-medium flex items-center">
														<button className="text-green-400 mr-5 my-2">
															<AiOutlineEye />
														</button>
														<a href="mailto:someone@yoursite.com?subject=Feedback01">
															<button className="text-yellow-400 mr-5 my-2">
																<IoMailOutline />
															</button>
														</a>
														<button className="text-red-400 mr-5 my-2">
															<RiDeleteBin5Line />
														</button>
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
			</div>
		</div>
	);
};

export default AdminFeedback;
