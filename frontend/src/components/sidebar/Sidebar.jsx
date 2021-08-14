import React from "react";
import { Link } from "react-router-dom";

import LogoBlue from "../../assets/images/logo-blue.png";
import { sidebarLinksAdmin } from "../../helpers/sidebarLinks";

const Sidebar = () => {
	const sidebarLinks = sidebarLinksAdmin;

	return (
		<div class="min-h-screen flex flex-row bg-gray-100">
			<div class="flex flex-col w-80 bg-white overflow-hidden">
				<div class="flex items-center justify-center h-20 mt-5">
					<img src={LogoBlue} alt="blue-logo" />
				</div>
				<ul class="flex flex-col pt-5 pl">
					{sidebarLinks.map((sidebarLink) => (
						<li className="hover:text-gray-900 hover:bg-lighter-blue text-gray-800 focus:bg-lighter-blue focus:text-gray-900">
							<Link class="flex flex-row items-center h-16 py-2 font-semibold p-5 hover:translate-x-2 transform transition-transform ease-in duration-200">
								<span class="inline-flex items-center justify-center h-12 w-12 text-2xl pl-5">
									{sidebarLink.icon}
								</span>
								<span class="mx-5 font-semibold text-base">
									{sidebarLink.name}
								</span>
							</Link>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default Sidebar;
