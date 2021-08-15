import React from "react";
import { BiSearch } from "react-icons/bi";

import PackageCard from "../components/packages/PackageCard";

const Packages = () => {
	return (
		<div className="text-gray-800 max-w-screen-2xl mx-auto px-4">
			<div className=" flex flex-col items-center pt-14">
				<h1 className="text-5xl font-extrabold pb-10 text-center">
					Select what's Best for You
				</h1>
				<form className="w-2/4 text-center relative mb-20">
					<input
						type="text"
						name="search"
						id="search"
						className="outline-none rounded-full border px-8 py-3 focus:border-light-blue w-full"
						placeholder="Search here..."
					/>
					<button className="text-white bg-light-blue absolute right-0 top-0 h-full rounded-full w-24 flex items-center justify-center font-bold text-2xl">
						<BiSearch />
					</button>
				</form>
			</div>
			<div className="flex w-full justify-center flex-wrap">
				<PackageCard />
				<PackageCard />
				<PackageCard />
				<PackageCard />
			</div>
		</div>
	);
};

export default Packages;
