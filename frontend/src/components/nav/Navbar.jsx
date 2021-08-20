import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

import LogoBlue from "../../assets/images/logo-blue.png";
import { navLinks, customerLoggedNavLinks } from "../../helpers/navbarLinks";
import { AuthContext } from "../../contexts/AuthContext";

const Navbar = () => {
	const history = useHistory();
	const { loggedIn, getLoggedIn } = useContext(AuthContext);
	const navigation = loggedIn ? customerLoggedNavLinks : navLinks;

	const logout = async () => {
		await axios.get("/users/logout");
		await getLoggedIn();
		history.push("/");
	};

	return (
		<header
			className={
				window.location.pathname === "/"
					? "bg-lighter-blue text-gray-800"
					: "text-gray-800"
			}
		>
			<div className="flex mx-auto max-w-screen-2xl justify-between items-center px-4 min-h-12">
				<Link to="/">
					<img src={LogoBlue} alt="blue-logo" />
				</Link>
				<nav>
					{navigation.map((navLink, index) => (
						<Link
							className="mx-5 font-semibold text-lg"
							to={navLink.path}
							key={index}
						>
							{navLink.name}
						</Link>
					))}
					{loggedIn ? (
						<Link
							className="ml-5 font-semibold text-lg bg-light-blue text-white py-3 px-8 rounded-full"
							onClick={logout}
						>
							Sign Out
						</Link>
					) : (
						<Link
							className="ml-5 font-semibold text-lg bg-light-blue text-white py-3 px-8 rounded-full"
							to="/auth/login"
						>
							Sign In
						</Link>
					)}
				</nav>
			</div>
		</header>
	);
};

export default Navbar;
