import React, { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

import { AuthContext } from "../../contexts/AuthContext";
import { CartContext } from "../../contexts/CartContext";

import LogoBlue from "../../assets/images/logo-blue.png";
import { navLinks, customerLoggedNavLinks } from "../../helpers/navbarLinks";
import SignoutConfirmModal from "../modals/SignoutConfirmModal";

const Navbar = () => {
	const [showModal, setShowModal] = useState(false);
	const history = useHistory();
	const { loggedIn, getLoggedIn } = useContext(AuthContext);
	const navigation = loggedIn.state ? customerLoggedNavLinks : navLinks;
	const { items } = useContext(CartContext);
	const itemCount = items.length;

	const logout = async () => {
		await axios.get("/users/logout");
		await getLoggedIn();
		history.push("/");

		localStorage.clear();
		setTimeout(() => window.location.reload(), 3);
	};

	return (
		<header
			className={
				window.location.pathname === "/"
					? "bg-lighter-blue text-gray-800"
					: "text-gray-800"
			}
		>
			{" "}
			{showModal && (
				<SignoutConfirmModal setShowModal={setShowModal} execute={logout} />
			)}
			<div className="flex mx-auto max-w-screen-2xl justify-between items-center px-4 min-h-12">
				<Link to="/">
					<img src={LogoBlue} alt="blue-logo" />
				</Link>
				<nav>
					{navigation.map((navLink, index) =>
						navLink.name == "Cart" && loggedIn.role === "customer" ? (
							<>
								<Link
									className=" font-semibold text-lg"
									to={navLink.path}
									key={index}
								>
									{navLink.name}
								</Link>
								<span class=" ml-2 items-center justify-center px-2 py-1  text-xs font-bold leading-none text-white bg-light-blue rounded-full">
									{itemCount}
								</span>
							</>
						) : (
							<Link
								className="mx-5 font-semibold text-lg"
								to={navLink.path}
								key={index}
							>
								{navLink.name}
							</Link>
						)
					)}
					{loggedIn.state ? (
						<Link
							className="ml-5 font-semibold text-lg bg-light-blue text-white py-3 px-8 rounded-full"
							onClick={() => setShowModal(true)}
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
