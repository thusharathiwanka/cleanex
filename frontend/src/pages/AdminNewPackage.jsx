import React, { useState } from "react";
import axios from "axios";

import Sidebar from "../components/sidebar/Sidebar";
import Error from "../components/toasts/Error";
import Success from "../components/toasts/Success";
import { allowedTypes } from "../helpers/allowedUploads";

// TODO validation error messages needs to be displayed
// TODO redirect to all packages page after successful package creation
const AdminNewPackage = () => {
	document.title = "CLEANEX - New Package";
	const [file, setFile] = useState(null);
	const [error, setError] = useState("");
	const [success, setSuccess] = useState("");
	const [buttonStatus, setButtonStatus] = useState(false);
	const [newPackage, setNewPackage] = useState({
		name: "",
		description: "",
		price: "",
		status: "active",
		src: "",
	});

	const savePackage = async (e) => {
		e.preventDefault();
		setButtonStatus(true);

		if (file) {
			const formData = new FormData();
			const fileName = `${Date.now()}-${file.name}`;
			formData.append("name", fileName);
			formData.append("src", file);
			try {
				const res = await axios.post("/packages/image/upload", formData);
				console.log(res.data.filename);
				newPackage.src = res.data.filename;
			} catch (err) {
				console.error(err.message);
				return setError(err.message);
			}
		}

		try {
			newPackage.createdAt = newPackage.updatedAt = new Date();
			console.log(newPackage);
			const res = await axios.post("/packages", newPackage);
			console.log(res);
			setButtonStatus(false);
			setNewPackage({});
			setSuccess("New package created successfully.");
		} catch (err) {
			console.error(err.response.message);
			setError(err.response.message);
			setButtonStatus(false);
		}
	};

	const fileChangeHandler = (e) => {
		const selectedFile = e.target.files[0];

		if (selectedFile && allowedTypes.includes(selectedFile.type)) {
			setFile(selectedFile);
			setError("");
		} else {
			setFile(null);
			setError(
				"Select valid type. (only jpeg, jpg, png file types are allowed)"
			);
		}
	};

	return (
		<div className=" text-gray-800">
			<div className="ml-80 mt-20 ">
				<h1
					className="text-5xl font-extrabold pb-10 text-center"
					data-aos="fade-up"
				>
					Create new Package
				</h1>
				<Sidebar />
				<div className="w-full pt-10 flex justify-center items-center">
					<div className="px-16 flex justify-center w-full">
						<form
							className="w-2/4 pt-10 text-gray-800 font-semibold relative"
							onSubmit={savePackage}
							encType="multipart/form-data"
						>
							{error && <Error error={error} />}
							{success && <Success success={success} />}
							<div
								className="flex flex-col justify-start pb-5 w-full"
								data-aos="fade-up-left"
							>
								<input
									type="file"
									accept=".png, .jpg, .jpeg"
									name="src"
									id="package-image"
									className="rounded-full px-4 py-3 focus:border-light-blue inline-block"
									required
									autoComplete="off"
									onChange={fileChangeHandler}
								/>
							</div>
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
									required
									autoComplete="off"
									value={newPackage.name}
									onChange={(e) =>
										setNewPackage({ ...newPackage, name: e.target.value })
									}
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
									required
									autoComplete="off"
									value={newPackage.description}
									onChange={(e) =>
										setNewPackage({
											...newPackage,
											description: e.target.value,
										})
									}
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
									required
									autoComplete="off"
									value={newPackage.price}
									onChange={(e) =>
										setNewPackage({ ...newPackage, price: e.target.value })
									}
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
									required
									value={newPackage.status}
									onChange={(e) =>
										setNewPackage({ ...newPackage, status: e.target.value })
									}
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
									{buttonStatus ? "Saving" : "Save"}
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
