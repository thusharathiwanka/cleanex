import React from "react";
//import Item from "../components/Laundry_bag/Item";
import Test_Item from "../components/Laundry_bag/Test_Item";
import OrderSummary from "../components/Laundry_bag/OrderSummary";
import List from "../components/Laundry_bag/List";
import Navbar from "../components/nav/Navbar";

const Laundry_bag = () => {
	return (
		<div>
			<Navbar />
			<div>
				<List />
			</div>
			<div>
				<OrderSummary />
			</div>
			<div>
				<Test_Item />
			</div>
		</div>
	);
};

export default Laundry_bag;
