import { useEffect, useState } from "react";
import axios from "axios";

import Spinner from "../loading/Spinner";

const ViewModal = ({ setShowViewModal, id }) => {
	const [feedback, setFeedback] = useState({});
	const [isLoading, setIsLoading] = useState(true);

	const getFeedbackInfo = async () => {
		const res = await axios.get(`feedbacks/${id}`);
		setFeedback(res.data.feedback);
		setIsLoading(false);
	};

	useEffect(() => {
		getFeedbackInfo(id);
	}, []);

	return (
		<div
			className="fixed z-10 inset-0 overflow-y-auto"
			aria-labelledby="modal-title"
			role="dialog"
			aria-modal="true"
		>
			<div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
				<div
					className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
					aria-hidden="true"
				></div>
				<span
					className="hidden sm:inline-block sm:align-middle sm:h-screen"
					aria-hidden="true"
				>
					&#8203;
				</span>
				<div
					className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-xl sm:w-full"
					data-aos="fade-bottom"
				>
					<div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
						{isLoading ? (
							<Spinner />
						) : (
							<div className="sm:flex sm:items-start mt-5">
								<div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-100 sm:mx-0 sm:h-16 sm:w-16">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										class="h-6 w-6"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
										/>
									</svg>
								</div>
								<div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full pr-4">
									<h3
										className="text-4xl font-bold text-gray-700"
										id="modal-title"
									>
										{feedback.topic}
									</h3>
									<p className="text-gray-400 text-base text-bold mt-2 pb-5">
										{feedback.description}
									</p>
									<div className="flex justify-between w-full">
										<p className="text-gray-500 text-sm text-bold mt-2 font-bold">
											ID
										</p>
										<p className="text-gray-500 text-sm text-bold mt-2 pl-4">
											{feedback._id}
										</p>
									</div>
									<div className="flex justify-between w-full">
										<p className="text-gray-500 text-sm text-bold mt-2 font-bold">
											CREATED AT
										</p>
										<p className="text-gray-500 text-sm text-bold mt-2 pl-4">
											{new Date(feedback.createdAt).toDateString()}
										</p>
									</div>
									<div className="mt-2"></div>
								</div>
							</div>
						)}
					</div>
					<div className="bg-white px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
						<button
							type="button"
							className="mt-3 w-full inline-flex justify-center rounded-full border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm mr-4 mb-2"
							onClick={() => setShowViewModal(false)}
						>
							Cancel
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ViewModal;
