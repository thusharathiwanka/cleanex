import React from "react";
import { Link } from "react-router-dom";

import LogoBlue from "../../assets/images/logo-blue.png";
import { navLinks } from "../../helpers/navbar";

const Navbar = () => {
	return (
		<header>
			<div className="container-xl flex mx-auto max-w-screen-xl min-h justify-between items-center py-8">
				<img src={LogoBlue} alt="blue-logo" className="logo" />
				<nav>
					{navLinks.map((navLink) => (
						<Link className="mx-5 font-medium" to={navLink.path}>
							{navLink.name}
						</Link>
					))}
				</nav>
			</div>
		</header>
	);
};

export default Navbar;
