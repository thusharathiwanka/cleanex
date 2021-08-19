import React, { useState } from "react";

const ConfirmModal = ({ execute, setShowModal, showModal, id }) => {
	return (
		<>
			{showModal ? (
				<>
					<div
						className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
						data-aos="fade-bottom"
					>
						<div className="relative w-auto my-6 mx-auto max-w-3xl">
							<div className="border-0 rounded-lg shadow-md relative flex flex-col w-full bg-white outline-none focus:outline-none">
								<div className="relative p-6 flex-auto">
									<p className=" text-gray-800 text-base leading-relaxed px-5 font-medium">
										Do you really want to delete this record?
									</p>
								</div>
								<div className="flex items-center justify-end px-6 py-5">
									<button
										className="text-red-500 background-transparent font-bold px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
										type="button"
										onClick={() => setShowModal(false)}
									>
										Close
									</button>
									<button
										className="bg-red-500 text-white active:bg-emerald-600 font-bold text-sm px-6 py-3 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
										type="button"
										onClick={() => execute(id)}
									>
										Delete
									</button>
								</div>
							</div>
						</div>
					</div>
					<div className="opacity-30 fixed inset-0 z-40 bg-white"></div>
				</>
			) : null}
		</>
	);
};

export default ConfirmModal;
