import React, { useEffect, useState, useRef } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";
import { BiImageAdd } from "react-icons/bi";
import { AiFillCloseCircle } from "react-icons/ai";
import { IoArrowBackOutline } from "react-icons/io5";

import Sidebar from "../components/sidebar/Sidebar";
import Error from "../components/toasts/Error";
import Success from "../components/toasts/Success";
import Spinner from "../components/loading/Spinner";
import { allowedTypes } from "../helpers/allowedUploads";
import { imageURL } from "../config/paths";

const AdminUpdatePackage = () => {
	document.title = "CLEANEX - Update Package";
	const history = useHistory();
	const [file, setFile] = useState(null);
	const [error, setError] = useState("");
	const [success, setSuccess] = useState("");
	const [buttonStatus, setButtonStatus] = useState(false);
	const [isLoading, setIsLoading] = useState(true);
	const [updatedPackage, setUpdatedPackage] = useState({
		name: "",
		description: "",
		price: "",
		status: "active",
		src: "",
	});
	const [preview, setPreview] = useState();
	const fileInputRef = useRef();

	const { id } = useParams();

	const getPackageDetails = async () => {
		const res = await axios.get(`packages/package/${id}`);
		setUpdatedPackage(res.data.package);
		setPreview(imageURL + res.data.package.src);
		setIsLoading(false);
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
				return setError(err.response.data);
			}
		}

		try {
			updatedPackage.updatedAt = new Date();
			const res = await axios.patch(`/packages/${id}`, updatedPackage);
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
			getPackageDetails();
			setTimeout(() => history.push("/auth/admin/packages"), 2000);
		} catch (err) {
			setError(err.response);
			console.log(err.response);
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
			<div className="ml-80 mt-12">
				<div className="w-full text-center flex justify-center">
					{error && <Error error={error} top="-top-2" />}
					{success && <Success success={success} top="-top-2" />}
				</div>
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
					Update Package
				</h1>
				<Sidebar />
				{isLoading ? (
					<Spinner />
				) : (
					<div className="w-full pt-5 flex justify-center items-center">
						<div className="px-16 flex justify-center w-full">
							<form
								className="w-2/4 text-gray-800 font-semibold relative"
								onSubmit={saveUpdatedPackage}
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
										autoComplete="off"
										required
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
										type="text"
										name="package-description"
										id="package-description"
										className="outline-none rounded-full border px-4 py-3 focus:border-light-blue focus:border-2"
										autoComplete="off"
										required
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
										autoComplete="off"
										required
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
										data-aos="zoom-in"
										data-aos-offset="50"
									>
										{buttonStatus ? "Saving" : "Save"}
									</button>
								</div>
							</form>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default AdminUpdatePackage;
