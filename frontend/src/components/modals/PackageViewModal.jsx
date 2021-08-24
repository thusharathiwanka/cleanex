import { useEffect, useState } from "react";
import axios from "axios";
import { imageURL } from "../../config/paths";

const ViewModal = ({ setShowViewModal, id }) => {
	const [singlePackage, setSinglePackage] = useState({
		name: "",
		description: "",
		price: "",
		createdAt: "",
		updatedAt: "",
		src: "",
		status: "",
	});
	const getPackageInfo = async () => {
		try {
			const res = await axios.get(`packages/package/${id}`);
			setSinglePackage(res.data.package);
		} catch (err) {
			console.error(err.message);
		}
	};

	useEffect(() => {
		getPackageInfo(id);
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
					className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
					data-aos="fade-bottom"
				>
					<div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
						<div className="sm:flex sm:items-start mt-5">
							<div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-100 sm:mx-0 sm:h-16 sm:w-16">
								<div>
									<img
										src={imageURL + singlePackage.src}
										alt="package-img"
										className="w-50 h-50 rounded-full object-cover"
									/>
								</div>
							</div>
							<div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
								<h3
									className="text-4xl font-bold text-gray-700"
									id="modal-title"
								>
									{singlePackage.name}
								</h3>
								<p className="text-gray-400 text-base text-bold mt-2 pb-5">
									{singlePackage.description}
								</p>
								<div className="flex justify-between">
									<p className="text-gray-500 text-sm text-bold mt-2 font-bold">
										ID
									</p>
									<p className="text-gray-500 text-sm text-bold mt-2 pl-4">
										{singlePackage._id}
									</p>
								</div>
								<div className="flex justify-between">
									<p className="text-gray-500 text-sm text-bold mt-2 font-bold">
										PRICE
									</p>
									<p className="text-gray-500 text-sm text-bold mt-2 pl-4">
										{"LKR " + singlePackage.price + ".00"}
									</p>
								</div>
								<div className="flex justify-between">
									<p className="text-gray-500 text-sm text-bold mt-2 font-bold">
										STATUS
									</p>
									<p className="text-gray-500 text-sm text-bold mt-2 pl-4">
										{singlePackage.status.charAt(0).toUpperCase() +
											singlePackage.status.slice(1)}
									</p>
								</div>
								<div className="flex justify-between">
									<p className="text-gray-500 text-sm text-bold mt-2 font-bold">
										CREATED AT
									</p>
									<p className="text-gray-500 text-sm text-bold mt-2 pl-4">
										{new Date(singlePackage.createdAt).toDateString()}
									</p>
								</div>
								<div className="flex justify-between">
									<p className="text-gray-500 text-sm text-bold mt-2 font-bold">
										UPDATED AT
									</p>
									<p className="text-gray-500 text-sm text-bold mt-2 pl-4">
										{new Date(singlePackage.updatedAt).toDateString()}
									</p>
								</div>
								<div className="mt-2"></div>
							</div>
						</div>
					</div>
					<div className="bg-white px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
						<button
							type="button"
							className="mt-3 w-full inline-flex justify-center rounded-full border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
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
