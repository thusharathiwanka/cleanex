import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

import Error from "../components/toasts/Error";
import RightBubble from "../assets/images/right-bottom-bubble-reason.png";
import LeftBubble from "../assets/images/left-bubble-process.png";
import { AuthContext } from "../contexts/AuthContext";

const AdminLogin = () => {
	document.title = "CLEANEX - Moderator Login";
	const history = useHistory();
	const { getLoggedIn } = useContext(AuthContext);
	const [error, setError] = useState("");
	const [buttonStatus, setButtonStatus] = useState(false);
	const [moderator, setModerator] = useState({ username: "", password: "" });

	const loginModerator = async (e) => {
		e.preventDefault();
		setButtonStatus(true);

		try {
			const res = await axios.post("moderators/login", moderator);
			setModerator({});
			setButtonStatus(false);
			await getLoggedIn();
			history.push(`/auth/${res.data.type}/dashboard`);
		} catch (err) {
			setError(err.response.data.message);
			setButtonStatus(false);
		}
	};

	return (
		<div>
			<div className="min-h-12"></div>
			{error && <Error error={error} />}
			<div className="text-gray-800 max-w-screen-2xl mx-auto min-h-88 pl-4 flex justify-between items-center overflow-hidden">
				<div className="font-semibold text-lg w-2/5 max-w-full mx-auto">
					<h1
						data-aos="fade-up"
						className="text-5xl font-extrabold pb-16 text-center -mt-20"
					>
						Moderator Login
					</h1>
					<form onSubmit={loginModerator}>
						<div
							className="flex flex-col justify-start pb-5"
							data-aos="fade-up-left"
						>
							<label htmlFor="username" className="pb-1">
								Username
							</label>
							<input
								type="text"
								name="username"
								id="username"
								autoComplete="off"
								className="outline-none rounded-full border px-4 py-3 focus:border-light-blue focus:border-2 transition duration-500 ease-in-out"
								required
								value={moderator.email}
								onChange={(e) =>
									setModerator({ ...moderator, username: e.target.value })
								}
							/>
						</div>
						<div
							className="flex flex-col justify-start pb-5"
							data-aos-delay="50"
							data-aos="fade-up-left"
						>
							<label htmlFor="password" className="pb-1">
								Password
							</label>
							<input
								type="password"
								name="password"
								id="password"
								autoComplete="off"
								className="outline-none rounded-full border px-4 py-3 focus:border-light-blue transition duration-500 ease-in-out"
								required
								value={moderator.password}
								onChange={(e) =>
									setModerator({ ...moderator, password: e.target.value })
								}
							/>
						</div>
						<div className="w-full flex justify-center">
							<button
								className="bg-light-blue text-white py-4 px-14 rounded-full mt-8 font-semibold"
								data-aos-delay="150"
								data-aos="fade-up-left"
								type="submit"
							>
								{!buttonStatus ? "Sign In" : "Signing In"}
							</button>
						</div>
					</form>
				</div>
				<img
					src={RightBubble}
					alt="right-bottom-bubble"
					className="absolute top-20 w-60 right-40 -z-2"
					data-aos="fade-bottom"
				/>
				<img
					src={LeftBubble}
					alt="left-bubble-img"
					className="absolute left-0 bottom-0 -z-2"
				/>
			</div>
		</div>
	);
};

export default AdminLogin;
