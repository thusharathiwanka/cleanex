import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Error from "../toasts/Error";
import Success from "../toasts/Success";
import { allowedTypes } from "../../helpers/allowedUploads";
import { useParams } from "react-router-dom";

const EditBlog = () => {
	const [Blog, setBlog] = useState("");
	const [Err, setErr] = useState("");
	const [Succ, setSucc] = useState("");
	const [File, setFile] = useState(null);
	const [ErrMsg, setErrMsg] = useState("");

	const { id } = useParams();

	useEffect(() => {
		const getBlog = async () => {
			const res = await axios.get(`/blog/get/${id}`);
			setBlog(res.data.singleBlog);
			// console.log(res.data.singleBlog);
		};
		getBlog();
	}, []);

	const updateBlog = async (e) => {
		e.preventDefault();
		const date = new Date();
		Blog.date = date.toLocaleDateString();
		try {
			if (File) {
				var formData = new FormData();
				const fileName = `${Date.now()}-${File.name}`;
				formData.append("name", fileName);
				formData.append("image", File);
				formData.append("previousname", Blog.name);
				Blog.name = fileName;

				const res = await axios.patch(`/blog/updateimage`, formData);
			}

			// console.log(Blog);
			const res = await axios.patch(`/blog/update/${id}`, Blog);
			if (res.status === 200) {
				setSucc(true);
			}
		} catch (err) {
			setErr(true);
			setErrMsg("Oops! Somthing went wrong");
			console.log(err);
		}
	};

	const fileHandler = (e) => {
		const selectedFile = e.target.files[0];
		if (selectedFile && allowedTypes.includes(selectedFile.type)) {
			setFile(selectedFile);
			setErr(false);
		} else {
			setFile(null);
			setErrMsg(
				"Select valid type. (only jpeg, jpg, png file types are allowed)"
			);
			setErr(true);
		}
	};
	return (
		<div className="pt-10">
			{Err && <Error error={ErrMsg} />}
			{Succ && <Success success={"Update Successful"} />}
			<span className="font-bold  text-3xl flex justify-center">
				Edit A Blog
			</span>
			<div className=" px-44">
				<form onSubmit={updateBlog} className=" pt-10">
					<div className="mb-10" encType="multipart/form-data">
						<label for="image" className="block text-gray-700 text-xl mb-2">
							Upload Cover Photo
						</label>
						<input
							type="file"
							onChange={fileHandler}
							accept=".png, .jpg, .jpeg"
							name="image"
							id="image"
							className=" font-semibold text-light-blue py-2 px-4"
						/>
					</div>
					<div className="mb-10">
						<label className="block text-gray-700 text-xl mb-2" for="username">
							Title
						</label>
						<input
							value={Blog.topic}
							onChange={(e) => setBlog({ ...Blog, topic: e.target.value })}
							required
							className="shadow focus:border-light-blue appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							type="text"
						/>
					</div>
					<div className="mb-10">
						<label className="block text-gray-700 text-xl mb-2" for="username">
							Brief Introduction
						</label>
						<textarea
							value={Blog.description}
							onChange={(e) =>
								setBlog({ ...Blog, description: e.target.value })
							}
							required
							className="focus:border-light-blue shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							type="text"
						/>
					</div>
					<div className="mb-10">
						<label className="block text-gray-700 text-xl mb-2" for="username">
							Content
						</label>
						<textarea
							value={Blog.content}
							onChange={(e) => setBlog({ ...Blog, content: e.target.value })}
							required
							className="focus:border-light-blue shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							type="text"
						/>
					</div>
					<div className=" flex justify-end mb-10">
						<Link to="/auth/user/blogs">
							<button className=" rounded-full  font-medium bg-light-blue shadow-md text-white py-2 px-5 text-xl">
								Cancel
							</button>
						</Link>
						<button
							className=" ml-5 rounded-full font-medium bg-light-blue shadow-md text-white py-2 px-5 text-xl"
							type="submit"
						>
							Edit
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default EditBlog;
