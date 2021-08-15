import React from "react";
import { Link, useLocation } from "react-router-dom";

import LogoBlue from "../../assets/images/logo-blue.png";
import { navLinks } from "../../helpers/navbarLinks";

const Navbar = () => {
	return (
		<header
			className={
				useLocation().pathname === "/"
					? "bg-lighter-blue text-gray-800"
					: "text-gray-800"
			}
		>
			<div className="flex mx-auto max-w-screen-2xl justify-between items-center px-4 min-h-12">
				<Link to="/">
					<img src={LogoBlue} alt="blue-logo" />
				</Link>
				<nav>
					{navLinks.map((navLink, index) => (
						<Link
							className="mx-5 font-semibold text-lg"
							to={navLink.path}
							key={index}
						>
							{navLink.name}
						</Link>
					))}
					<Link
						className="ml-5 font-semibold text-lg bg-light-blue text-white py-3 px-8 rounded-full"
						to="/auth/login"
					>
						Sign in
					</Link>
				</nav>
			</div>
		</header>
	);
};

export default Navbar;
