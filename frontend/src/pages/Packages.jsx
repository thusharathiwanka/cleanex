import React, { useEffect, useState } from "react";
import axios from "axios";
import { BiSearch } from "react-icons/bi";
import { IoArrowBackOutline } from "react-icons/io5";
import { IoIosClose } from "react-icons/io";

import PackageCard from "../components/packages/PackageCard";
import Spinner from "../components/loading/Spinner";

const Packages = () => {
	document.title = "CLEANEX - All Packages";
	const [activePackages, setActivePackages] = useState([]);
	const [searchQuery, setSearchQuery] = useState("");
	const [isSearchEmpty, setIsSearchEmpty] = useState(false);
	const [isLoading, setIsLoading] = useState(true);

	const getPackages = async () => {
		try {
			const res = await axios.get("packages/active");
			setActivePackages(res.data.packages);
			setSearchQuery("");
			setIsSearchEmpty(false);
			setIsLoading(false);
		} catch (err) {
			console.error(err);
		}
	};

	const getPackagesBasedOnSearchQuery = async (e) => {
		e.preventDefault();
		if (searchQuery) {
			setIsLoading(true);
			const res = await axios.get("packages/active");
			const filteredActivePackages = res.data.packages.filter((activePackage) =>
				activePackage.name.toLowerCase().includes(searchQuery.toLowerCase())
			);

			if (filteredActivePackages.length === 0) {
				setActivePackages([]);
				setIsSearchEmpty(true);
				setIsLoading(false);
				return;
			}

			setActivePackages(filteredActivePackages);
			setIsLoading(false);
		}
	};

	useEffect(() => getPackages(), []);

	return (
		<div className="text-gray-800 max-w-screen-2xl mx-auto px-4">
			<div className=" flex flex-col items-center pt-14">
				<h1 className="text-5xl font-extrabold pb-10 text-center">
					Select what's Best for You
				</h1>
				<form
					className="w-2/4 text-center relative mb-12"
					onSubmit={getPackagesBasedOnSearchQuery}
				>
					<input
						type="text"
						name="search"
						id="search"
						className="outline-none rounded-full border px-8 py-3 focus:border-light-blue w-full"
						placeholder="Search here..."
						value={searchQuery}
						onChange={(e) => {
							setSearchQuery(e.target.value);
						}}
					/>
					<button className="text-white bg-light-blue absolute right-0 top-0 h-full rounded-full w-24 flex items-center justify-center font-bold text-2xl">
						<BiSearch />
					</button>
					{searchQuery && (
						<div
							className="absolute right-24 top-0 h-full rounded-full p-2 flex items-center justify-center font-bold text-3xl cursor-pointer"
							onClick={() => {
								setSearchQuery("");
								getPackages();
							}}
						>
							<IoIosClose className="text-red-400" />
						</div>
					)}
				</form>
			</div>
			{isLoading ? (
				<Spinner />
			) : (
				<div className="flex w-full justify-center flex-wrap">
					{isSearchEmpty && (
						<div className="w-full flex justify-center flex-col items-center">
							<h1 className="text-2xl font-bold pb-10 text-center text-gray-500">
								No Packages Found
							</h1>
							<button
								className="font-semibold text-lg bg-light-blue text-white py-2 rounded-full flex justify-center items-center w-40"
								onClick={getPackages}
							>
								<IoArrowBackOutline className="text-2xl" />
								Back
							</button>
						</div>
					)}
					{activePackages.map((packageItem) => (
						<PackageCard packageItem={packageItem} key={packageItem._id} />
					))}
				</div>
			)}
		</div>
	);
};

export default Packages;
