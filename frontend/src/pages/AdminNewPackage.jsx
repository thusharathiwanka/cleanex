import React from "react";

import Sidebar from "../components/sidebar/Sidebar";

const AdminNewPackage = () => {
	return (
		<div className=" text-gray-800">
			<div className="ml-80 mt-20 ">
				<h1 className="text-5xl font-extrabold pb-10 text-center">
					Create new Package
				</h1>
				<Sidebar />
				<div className="w-full pt-10 flex justify-center items-center">
					<div className="px-16 flex justify-center w-full">
						<form className="w-2/4 pt-10 text-gray-800 font-semibold">
							<div
								className="flex flex-col justify-start pb-5 w-full"
								data-aos="fade-up-left"
							>
								<label htmlFor="package-name" className="pb-1">
									Package Name
								</label>
								<input
									type="text"
									name="package-name"
									id="package-name"
									className="outline-none rounded-full border px-4 py-3 focus:border-light-blue"
								/>
							</div>
							<div
								className="flex flex-col justify-start pb-5"
								data-aos-delay="50"
								data-aos="fade-up-left"
							>
								<label htmlFor="package-description" className="pb-1">
									Package Description
								</label>
								<input
									type="email"
									name="package-description"
									id="package-description"
									className="outline-none rounded-full border px-4 py-3 focus:border-light-blue focus:border-2"
								/>
							</div>
							<div
								className="flex flex-col justify-start pb-5"
								data-aos-delay="100"
								data-aos="fade-up-left"
							>
								<label htmlFor="price" className="pb-1">
									Package Price (LKR)
								</label>
								<input
									type="number"
									name="price"
									id="price"
									className="outline-none rounded-full border px-4 py-3 focus:border-light-blue"
								/>
							</div>
							<div
								className="flex flex-col justify-start pb-5"
								data-aos-delay="150"
								data-aos="fade-up-left"
							>
								<label htmlFor="price" className="pb-1">
									Package Status
								</label>
								<select
									name="status"
									className="border rounded-full px-4 py-4 focus:outline-none"
								>
									<option value="active">Active</option>
									<option value="inactive">Inactive</option>
								</select>
							</div>
							<div className="flex justify-center">
								<button
									className="bg-light-blue text-white py-4 px-14 rounded-full mt-8 font-semibold text-center"
									data-aos-delay="250"
									data-aos="fade-up-left"
								>
									Sign Up
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AdminNewPackage;
