import axios from "axios";
import React, { useState } from "react";
import Error from "../toasts/Error";
import Success from "../toasts/Success";
import { Link, useHistory } from "react-router-dom";
const Feedback = () => {
	const history = useHistory();
	const [error, setError] = useState("");
	const [success, setSuccess] = useState("");
	const [button, setButton] = useState(false);
	const [newFeedback, setNewFeedback] = useState({
		topic: "",
		description: "",
		createdAt: "",
		givenBy: "",
		category: "",
	});
	const saveFeedback = async (e) => {
		e.preventDefault();
		setButton(true);
		setNewFeedback({
			topic: "",
			description: "",
			createdAt: "",
			givenBy: "active",
			category: "",
		});
		try {
			newFeedback.createdAt = new Date();
			await axios.post("feedbacks", newFeedback);

			setButton(false);
			// console.log(newFeedback);
			setSuccess("Feedback is send Successfully.");

			const logout = async () => {
				await axios.get("/users/profile");

				history.push("/");
			};
			logout();
		} catch (err) {
			console.error(err.response.data.message);
			setError(err.response.data.message);
			setButton(false);
		}
	};

	return (
		<div>
			{error && <Error error={error} top="-top-2" />}
			{success && <Success success={success} top="-top-2" />}
			<div className="flex mx-auto items-center justify-center shadow-lg mt-56  mb-4 max-w-lg">
				<form
					className="w-full max-w-xl bg-white rounded-lg px-4 pt-2"
					onSubmit={saveFeedback}
					encType="multipart/form-data"
				>
					<div className="flex flex-wrap -mx-3 mb-6">
						<h2 className="text-5xl font-extrabold pb-10 pt-10 text-center ml-8">
							Feedback
						</h2>
						<div className="w-full md:w-full px-3 mb-2 mt-2">
							<div className="flex flex-col justify-start pb-5 w-full">
								<label htmlFor="package-name" className="pb-1">
									Category
								</label>
								<select
									class=" outline-none rounded-full border px-4 py-3 focus:border-light-blue"
									onChange={(e) =>
										setNewFeedback({
											...newFeedback,
											category: e.target.value,
										})
									}
								>
									<option>Select</option>
									<option>Bug</option>
									<option>Features</option>
									<option>Positive</option>
									<option>Negative</option>
								</select>
							</div>
							<div className="flex flex-col justify-start pb-5 w-full">
								<label htmlFor="package-topic" className="pb-1">
									Topic
								</label>
								<input
									className="outline-none rounded-full border px-4 py-3 focus:border-light-blue"
									placeholder="Topic"
									required
									autoComplete="off"
									type="text"
									name="topic"
									id="topic"
									value={newFeedback.topic}
									onChange={(e) =>
										setNewFeedback({ ...newFeedback, topic: e.target.value })
									}
								/>
							</div>
							<div className="flex flex-col justify-start pb-5 w-full">
								<label htmlFor="package-Description" className="pb-1">
									Description
								</label>
								<input
									class="bg-gray-100 rounded border-2 border-light-blue leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white"
									value={newFeedback.description}
									placeholder="Type Your Feedback"
									required
									autoComplete="off"
									type="text"
									name="description"
									id="description"
									onChange={(e) =>
										setNewFeedback({
											...newFeedback,
											description: e.target.value,
										})
									}
								/>
							</div>
						</div>
						<div className="w-full md:w-full flex items-start px-3">
							<div className="flex items-start w-1/2 text-gray-700 px-2 mr-auto"></div>
							<div className="-mr-1 space-x-4">
								<Link className="transition duration-500 ease-in-out py-3 px-5 bg-black hover:bg-light-blue text-white rounded-3xl transform hover:-translate-y-1 hover:scale-110">
									Cancle
								</Link>
								<button
									className="transition duration-500 ease-in-out py-3 px-5 bg-light-blue hover:bg-black text-white rounded-3xl transform hover:-translate-y-1 hover:scale-110"
									to={`/auth/user/profile`}
								>
									{button ? "Sending" : "send"}
								</button>
							</div>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Feedback;
