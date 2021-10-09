import axios from "axios";
import React, { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";

import Error from "../components/toasts/Error";
import TShirtImage from "../../src/assets/images/hanging-t-shirt.png";
import RightBottomBubble from "../assets/images/right-bottom-bubble-reason.png";
import { AuthContext } from "../contexts/AuthContext";

const Register = () => {
	document.title = "CLEANEX - Sign Up";
	const [customer, setCustomer] = useState({
		name: "",
		email: "",
		password: "",
		mobile: "",
	});
	const [error, setError] = useState("");
	const [buttonStatus, setButtonStatus] = useState(false);
	const { getLoggedIn } = useContext(AuthContext);
	const history = useHistory();

	const registerCustomer = async (e) => {
		e.preventDefault();
		setButtonStatus(true);
		console.log(customer);

		customer.createdAt = customer.updatedAt = new Date();

		try {
			await axios.post("customers/register", customer);
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
						Create an Account
					</h1>
					<form>
						<div
							className="flex flex-col justify-start pb-5"
							data-aos="fade-up-left"
						>
							<label htmlFor="name" className="pb-1">
								Name
							</label>
							<input
								type="text"
								name="name"
								id="name"
								className="outline-none rounded-full border px-4 py-3 focus:border-light-blue transition duration-500 ease-in-out"
								required
								autoComplete="off"
								value={customer.name}
								onChange={(e) =>
									setCustomer({ ...customer, name: e.target.value })
								}
							/>
						</div>
						<div
							className="flex flex-col justify-start pb-5"
							data-aos-delay="50"
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
							data-aos-delay="100"
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
						<div
							className="flex flex-col justify-start pb-5"
							data-aos-delay="150"
							data-aos="fade-up-left"
						>
							<label htmlFor="mobile" className="pb-1">
								Mobile Number
							</label>
							<input
								type="text"
								name="mobile"
								id="mobile"
								autoComplete="off"
								className="outline-none rounded-full border px-4 py-3 focus:border-light-blue transition duration-500 ease-in-out"
								required
								maxLength="10"
								value={customer.mobile}
								onChange={(e) =>
									setCustomer({ ...customer, mobile: e.target.value })
								}
							/>
						</div>
						<p data-aos-delay="200" data-aos="fade-up-left">
							Already have an Account ? &nbsp;
							<Link to="/auth/login" className="text-light-blue">
								Sign In
							</Link>
						</p>
						<button
							className="bg-light-blue text-white py-4 px-14 rounded-full mt-8 font-semibold"
							data-aos-delay="250"
							data-aos="fade-up-left"
							onClick={registerCustomer}
						>
							{!buttonStatus ? "Sign Up" : "Signing Up"}
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

export default Register;
