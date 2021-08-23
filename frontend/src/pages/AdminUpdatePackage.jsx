import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import Sidebar from "../components/sidebar/Sidebar";
import Error from "../components/toasts/Error";
import Success from "../components/toasts/Success";
import { allowedTypes } from "../helpers/allowedUploads";

// TODO selected image preview should be added
// TODO toast message position should be changed
const AdminUpdatePackage = () => {
	document.title = "CLEANEX - Update Package";
	const [file, setFile] = useState(null);
	const [error, setError] = useState("");
	const [success, setSuccess] = useState("");
	const [buttonStatus, setButtonStatus] = useState(false);
	const [updatedPackage, setUpdatedPackage] = useState({
		name: "",
		description: "",
		price: "",
		status: "active",
		src: "",
	});

	const { id } = useParams();

	const getPackageDetails = async () => {
		const res = await axios.get(`packages/package/${id}`);
		setUpdatedPackage(res.data.package);
	};

	const saveUpdatedPackage = async (e) => {
		e.preventDefault();
		setButtonStatus(true);

		if (file) {
			const formData = new FormData();
			const fileName = `${Date.now()}-${file.name}`;
			formData.append("name", fileName);
			formData.append("src", file);
			try {
				const res = await axios.post("/packages/image/upload", formData);
				updatedPackage.src = res.data.filename;
			} catch (err) {
				console.error(err.message);
				return setError(err.message);
			}
		}

		try {
			updatedPackage.updatedAt = new Date();
			const res = await axios.patch(`/packages/${id}`, updatedPackage);
			console.log(res);
			setButtonStatus(false);
			setUpdatedPackage({
				name: "",
				description: "",
				price: "",
				status: "active",
				src: "",
			});
			setFile("");
			setSuccess("Package updated successfully.");
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

	useEffect(() => {
		getPackageDetails();
	}, []);

	return (
		<div className=" text-gray-800">
			<div className="ml-80 mt-20 ">
				<h1
					className="text-5xl font-extrabold pb-10 text-center"
					data-aos="fade-up"
				>
					Update Package
				</h1>
				<Sidebar />
				<div className="w-full pt-10 flex justify-center items-center">
					<div className="px-16 flex justify-center w-full">
						<form
							className="w-2/4 pt-10 text-gray-800 font-semibold relative"
							onSubmit={saveUpdatedPackage}
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
									value={updatedPackage.name}
									onChange={(e) =>
										setUpdatedPackage({
											...updatedPackage,
											name: e.target.value,
										})
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
									value={updatedPackage.description}
									onChange={(e) =>
										setUpdatedPackage({
											...updatedPackage,
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
									value={updatedPackage.price}
									onChange={(e) =>
										setUpdatedPackage({
											...updatedPackage,
											price: e.target.value,
										})
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
									value={updatedPackage.status}
									onChange={(e) =>
										setUpdatedPackage({
											...updatedPackage,
											status: e.target.value,
										})
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

export default AdminUpdatePackage;
