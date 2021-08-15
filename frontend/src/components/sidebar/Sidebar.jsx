import React from "react";
import { Link } from "react-router-dom";

import LogoBlue from "../../assets/images/logo-blue.png";
import { sidebarLinksAdmin } from "../../helpers/sidebarLinks";

const Sidebar = () => {
	const sidebarLinks = sidebarLinksAdmin;

	return (
		<div className="flex flex-col w-80 bg-white overflow-hidden shadow-xl h-screen fixed top-0 left-0">
			<div className="flex items-center justify-center h-20 mt-5">
				<img src={LogoBlue} alt="blue-logo" />
			</div>
			<ul className="flex flex-col pt-5 pl">
				{sidebarLinks.map((sidebarLink, index) => (
					<li
						className="hover:text-gray-900 hover:bg-lighter-blue text-gray-800 focus:bg-lighter-blue focus:text-gray-900"
						key={index}
					>
						<Link
							to={sidebarLink.path}
							className="flex flex-row items-center h-16 py-2 font-semibold p-5 hover:translate-x-2 transform transition-transform ease-in duration-200"
						>
							<span className="inline-flex items-center justify-center h-12 w-12 text-2xl pl-5">
								{sidebarLink.icon}
							</span>
							<span className="mx-5 font-semibold text-base">
								{sidebarLink.name}
							</span>
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Sidebar;
