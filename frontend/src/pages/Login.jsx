import React, { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

import Error from "../components/toasts/Error";
import TShirtImage from "../../src/assets/images/hanging-t-shirt.png";
import RightBottomBubble from "../assets/images/right-bottom-bubble-reason.png";
import { AuthContext } from "../contexts/AuthContext";

const Login = () => {
	document.title = "CLEANEX - Sign In";
	const history = useHistory();
	const { getLoggedIn } = useContext(AuthContext);
	const [error, setError] = useState("");
	const [buttonStatus, setButtonStatus] = useState(false);
	const [customer, setCustomer] = useState({ email: "", password: "" });

	const loginCustomer = async (e) => {
		e.preventDefault();
		setButtonStatus(true);

		try {
			await axios.post("customers/login", customer);
			setCustomer({});
			setButtonStatus(false);
			await getLoggedIn();
			history.push("/auth/user/packages");
		} catch (err) {
			setError(err.response.data.message);
			setButtonStatus(false);
		}
	};

	return (
		<div>
			{error && <Error error={error} />}
			<div className="text-gray-800 max-w-screen-2.5xl ml-auto max-h-88 pl-4 flex justify-between items-center overflow-hidden relative">
				<div className="font-semibold text-lg">
					<h1
						data-aos="fade-up"
						className="text-5xl font-extrabold pb-10 text-center"
					>
						Sign into your Account
					</h1>
					<form onSubmit={loginCustomer}>
						<div
							className="flex flex-col justify-start pb-5"
							data-aos="fade-up-left"
						>
							<label htmlFor="email" className="pb-1">
								Email Address
							</label>
							<input
								type="email"
								name="email"
								id="email"
								autoComplete="off"
								className="outline-none rounded-full border px-4 py-3 focus:border-light-blue focus:border-2 transition duration-500 ease-in-out"
								required
								value={customer.email}
								onChange={(e) =>
									setCustomer({ ...customer, email: e.target.value })
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
								value={customer.password}
								onChange={(e) =>
									setCustomer({ ...customer, password: e.target.value })
								}
							/>
						</div>
						<p data-aos-delay="100" data-aos="fade-up-left">
							Don't have an Account ? &nbsp;
							<Link to="/auth/register" className="text-light-blue">
								Sign Up
							</Link>
						</p>
						<button
							className="bg-light-blue text-white py-4 px-14 rounded-full mt-8 font-semibold"
							data-aos-delay="150"
							data-aos="fade-up-left"
							type="submit"
						>
							{!buttonStatus ? "Sign In" : "Signing In"}
						</button>
					</form>
				</div>
				<div className="max-h-88">
					<img src={TShirtImage} alt="t-shirt" data-aos="fade-left" />
				</div>
				<img
					src={RightBottomBubble}
					alt="right-bottom-bubble"
					className="absolute -z-2 top-20 w-60 left-1/3"
					data-aos="fade-bottom"
				/>
			</div>
		</div>
	);
};

export default Login;
