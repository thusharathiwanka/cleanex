import React, { useState, useEffect } from "react";
//import Item from "../components/Laundry_bag/Item";
import Item from "../components/Laundry_bag/Item";
import OrderSummary from "../components/Laundry_bag/OrderSummary";
import List from "../components/Laundry_bag/LaundryList";
import Navbar from "../components/nav/Navbar";
import axios from "axios";
import Footer from "../components/footer/Footer";
const Laundry_bag = () => {
	const [activePackages, setActivePackages] = useState([]);

	const getPackages = async () => {
		try {
			const res = await axios.get("packages/active");
			setActivePackages(res.data.packages);
		} catch (err) {
			console.error(err);
		}
	};

	useEffect(() => getPackages(), []);
	return (
		<div>
			<Navbar />
			<div>
				<List />
			</div>
			<div>
				<OrderSummary />
			</div>

			<div className="flex max-w-full justify-center flex-wrap  mb-20 ml-24 mr-10 ">
				{activePackages.map((packageItem) => (
					<Item packageItem={packageItem} key={packageItem._id} />
				))}
			</div>

			<Footer />
		</div>
	);
};

export default Laundry_bag;
