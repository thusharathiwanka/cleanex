import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoAddCircle } from "react-icons/io5";
import { BsCalendar } from "react-icons/bs";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiEdit3 } from "react-icons/fi";
import BlogImg from "../../assets/images/blog.png";
import { AuthContext } from "../../contexts/AuthContext";
import axios from "axios";
import { imageURL } from "../../config/paths";
import ConfirmModal from "../modals/ConfirmModal";

const BlogView = () => {
	const { loggedIn } = useContext(AuthContext);
	const [AllBlogs, setAllBlogs] = useState([]);
	const [BlogId, setBlogId] = useState("");
	const [Popup, setPopup] = useState("");
	const [Delete, setDelete] = useState("");

	useEffect(() => {
		const getAllBlogs = async () => {
			const res = await axios.get("/blog/getall");
			setAllBlogs(res.data.blogs);
			// console.log(res.data.blogs);
		};
		getAllBlogs();
	}, [Delete]);

	const deleteBlog = async (id) => {
		try {
			const res = await axios.delete(`/blog/delete/${id}`);
			if (res.status === 200) {
				setPopup(false);
				setDelete(BlogId);
			}
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<div className="relative pb-20">
			{Popup && (
				<ConfirmModal
					setShowModal={setPopup}
					showModal={Popup}
					execute={deleteBlog}
					id={BlogId}
				/>
			)}
			<img src={BlogImg} alt="blog" className=" w-full" />
			{loggedIn.role === "admin" && (
				<Link to="/createblogs">
					<IoAddCircle className=" cursor-pointer text-light-blue inline transform hover:scale-110 motion-reduce:transform-none w-28 h-28 fixed right-10 bottom-10" />
				</Link>
			)}
			<h1 className=" text-6xl font-bold text-white absolute top-36 left-20">
				Our Blogs
			</h1>

			<div className="mt-5 grid grid-cols-3 gap-x-32 px-40 pt-10">
				{AllBlogs.map((blog) => {
					return (
						<div className=" mb-10 overflow-hidden rounded-xl shadow-lg ">
							<img
								src={imageURL + blog.name}
								alt="blog"
								className=" w-411 h-264 object-cover"
							/>
							<div className=" relative px-10 pt-2 pb-5">
								<BsCalendar className=" text-light-blue inline" />
								<span className="ml-2 text-sm">{blog.date}</span>
								<br />
								<span className="pt-2 font-bold">{blog.topic}.</span>
								<br />
								<span className="pt-2">{blog.description}</span>
								<br />
								<br />
								<hr />
								<div className="pt-2">
									<Link to={`/singleblog/${blog._id}`}>
										<span className="text-light-blue cursor-pointer">
											Read More
										</span>
									</Link>
									{loggedIn.role === "admin" && (
										<div className=" absolute right-10 bottom-5">
											<Link to={`/editblogs/${blog._id}`}>
												<FiEdit3 className="cursor-pointer text-yellow-600 inline transform hover:scale-110 motion-reduce:transform-none w-6 h-6" />
											</Link>
											<RiDeleteBin6Line
												onClick={() => {
													setPopup(true);
													setBlogId(blog._id);
												}}
												className="cursor-pointer ml-2 text-red-600 transform hover:scale-110 motion-reduce:transform-none w-6 h-6 inline"
											/>
										</div>
									)}
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default BlogView;
