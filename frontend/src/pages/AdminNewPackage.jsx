import React, { useEffect, useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import { BiImageAdd } from "react-icons/bi";
import { AiFillCloseCircle } from "react-icons/ai";
import { IoArrowBackOutline } from "react-icons/io5";

import Sidebar from "../components/sidebar/Sidebar";
import Error from "../components/toasts/Error";
import Success from "../components/toasts/Success";
import { allowedTypes } from "../helpers/allowedUploads";

const AdminNewPackage = () => {
	document.title = "CLEANEX - New Package";
	const history = useHistory();
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
	const [preview, setPreview] = useState("");
	const fileInputRef = useRef();

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
				newPackage.src = res.data.filename;
			} catch (err) {
				return setError(err.response.data.message);
			}
		}

		try {
			newPackage.createdAt = newPackage.updatedAt = new Date();
			await axios.post("/packages", newPackage);
			setButtonStatus(false);
			setNewPackage({
				name: "",
				description: "",
				price: "",
				status: "active",
				src: "",
			});
			setFile("");
			setSuccess("New package created successfully.");
			setTimeout(() => history.push("/auth/admin/packages"), 2000);
		} catch (err) {
			console.log(err.response);
			setError(err.response.data.message);
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
		if (file) {
			const reader = new FileReader();
			reader.onloadend = () => {
				setPreview(reader.result);
			};
			return reader.readAsDataURL(file);
		}
		setPreview(null);
	}, [file]);

	return (
		<div className=" text-gray-800">
			<div className="ml-80 mt-12 ">
				{error && <Error error={error} top="-top-2" />}
				{success && <Success success={success} top="-top-2" />}
				<div
					className="flex justify-start mx-10"
					data-aos="fade-left"
					data-aos-delay="100"
				>
					<Link
						className="ml-5 font-semibold text-lg bg-light-blue text-white py-3 px-8 rounded-full flex justify-center items-center"
						to="/auth/admin/packages"
					>
						<IoArrowBackOutline className="text-2xl mr-2" />
						Back
					</Link>
				</div>
				<h1
					className="text-5xl font-extrabold pb-10 text-center"
					data-aos="fade-up"
				>
					Create new Package
				</h1>
				<Sidebar />
				<div className="w-full pt-5 flex justify-center items-center">
					<div className="px-16 flex justify-center w-full">
						<form
							className="w-2/4 text-gray-800 font-semibold relative"
							onSubmit={savePackage}
							encType="multipart/form-data"
						>
							<div
								className="flex flex-col justify-start pb-5 w-full"
								data-aos="fade-up-left"
							>
								<div className="w-full flex justify-center">
									{preview ? (
										<div className="relative">
											<img
												src={preview}
												alt="preview-img"
												className="w-48 h-48 rounded-full text-center shadow-lg"
											/>
											<div
												className="text-3xl text-red-400 absolute top-0 right-8 cursor-pointer bg-white rounded-full"
												onClick={() => {
													setFile(null);
													setPreview(null);
												}}
											>
												<AiFillCloseCircle />
											</div>
										</div>
									) : (
										<button
											className="flex flex-col justify-center items-center w-48 h-48 rounded-full text-center shadow-lg p-5 bg-white font-semibold"
											onClick={(e) => {
												e.preventDefault();
												fileInputRef.current.click();
											}}
										>
											<div className="text-2xl pb-2">
												<BiImageAdd />
											</div>
											Select Image
										</button>
									)}
								</div>
								<input
									type="file"
									accept=".png, .jpg, .jpeg"
									name="src"
									id="package-image"
									className="hidden"
									onChange={fileChangeHandler}
									ref={fileInputRef}
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
									type="text"
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
									data-aos="zoom-in"
									data-aos-delay="250"
									data-aos-offset="50"
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
