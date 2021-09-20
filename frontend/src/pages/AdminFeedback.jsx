import React, { useState, useEffect } from "react";
import axios from "axios";
import { RiDeleteBin5Line } from "react-icons/ri";
import { MdFeedback } from "react-icons/md";
import { AiOutlineEye } from "react-icons/ai";
import { IoMailOutline } from "react-icons/io5";

import Sidebar from "../components/sidebar/Sidebar";
import Spinner from "../components/loading/Spinner";
import ConfirmModal from "../components/modals/ConfirmModal";
import FeedbackViewModal from "../components/modals/FeedbackViewModal";

const AdminFeedback = () => {
	document.title = "CLEANEX - Feedbacks";
	const [feedbacks, setFeedbacks] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [showModal, setShowModal] = useState(false);
	const [showViewModal, setShowViewModal] = useState(false);
	const [feedbackId, setFeedbackId] = useState("");

	const getFeedbacks = async () => {
		try {
			const res = await axios.get("feedbacks");
			setFeedbacks(res.data.feedbacks);
			setIsLoading(false);
		} catch (err) {
			console.error(err);
		}
	};

	const deleteFeedback = async (id) => {
		try {
			await axios.delete(`feedbacks/${id}`);
			getFeedbacks();
			setShowModal(false);
		} catch (err) {
			console.error(err.message);
		}
	};

	useEffect(() => {
		getFeedbacks();
	}, []);

	return (
		<div className=" text-gray-800">
			{showModal && (
				<ConfirmModal
					setShowModal={setShowModal}
					showModal={showModal}
					execute={deleteFeedback}
					id={feedbackId}
				/>
			)}
			{showViewModal && (
				<FeedbackViewModal
					setShowViewModal={setShowViewModal}
					showViewModal={showViewModal}
					id={feedbackId}
				/>
			)}
			<div className="ml-80 mt-20">
				<h1
					className="text-5xl font-extrabold pb-10 text-center"
					data-aos="fade-up"
				>
					Feedbacks
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
												<tbody
													className="bg-white divide-y divide-gray-200"
													key={feedback._id}
												>
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
															<button
																className="text-green-400 mr-5 my-2"
																onClick={() => {
																	setFeedbackId(feedback._id);
																	setShowViewModal(true);
																}}
															>
																<AiOutlineEye />
															</button>
															<a
																href={`mailto:${feedback.givenBy.email}?subject=${feedback.topic}`}
															>
																<button className="text-yellow-400 mr-5 my-2">
																	<IoMailOutline />
																</button>
															</a>
															<button
																className="text-red-400 mr-5 my-2"
																onClick={() => {
																	setFeedbackId(feedback._id);
																	setShowModal(true);
																}}
															>
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
				)}
			</div>
		</div>
	);
};

export default AdminFeedback;
