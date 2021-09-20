const ConfirmModal = ({ execute, setShowModal }) => {
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
					data-aos="fade-top"
				>
					<div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
						<div className="sm:flex sm:items-start">
							<div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-lighter-blue sm:mx-0 sm:h-10 sm:w-10">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-6 w-6 text-light-blue"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
									/>
								</svg>
							</div>
							<div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
								<h3
									className="text-xl leading-6 font-bold text-gray-800"
									id="modal-title"
								>
									Sign Out
								</h3>
								<div className="mt-2">
									<p className="text-sm text-gray-500 font-medium">
										Do you really want to sign out?
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className="bg-white px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
						<button
							type="button"
							className="w-full inline-flex justify-center rounded-full border border-transparent shadow-sm px-4 py-2 bg-light-blue text-base font-medium text-white hover:opacity-75 focus:outline-none sm:ml-3 sm:w-auto sm:text-sm"
							onClick={execute}
						>
							Yes
						</button>
						<button
							type="button"
							className="mt-3 w-full inline-flex justify-center rounded-full border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-800 hover:bg-gray-50 focus:outline-none sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
							onClick={() => setShowModal(false)}
						>
							No
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ConfirmModal;
