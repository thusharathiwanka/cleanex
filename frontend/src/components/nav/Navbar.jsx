import React from "react";
import { Link } from "react-router-dom";

import LogoBlue from "../../assets/images/logo-blue.png";
import { navLinks } from "../../helpers/navbar";

const Navbar = () => {
	return (
		<header className="bg-lighter-blue">
			<div className="flex mx-auto max-w-screen-2xl justify-between items-center px-4 min-h-12">
				<img src={LogoBlue} alt="blue-logo" />
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
						to="/login"
					>
						Sign in
					</Link>
				</nav>
			</div>
		</header>
	);
};

export default Navbar;
