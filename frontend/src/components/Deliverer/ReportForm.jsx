import { useState } from "react";
import React from "react";
import axios from "axios";
import { AiOutlineRollback } from "react-icons/ai";
import { Link } from "react-router-dom";
import "react-dates/initialize";
import { DateRangePicker } from "react-dates";
import { jsPDF } from "jspdf";
import Logo from "../../assets/images/logo-blue.png";
import "jspdf-autotable";
import "react-dates/lib/css/_datepicker.css";
import LocationInput from "../Laundry_bag/locationIput";
import Error from "../toasts/Error";

const Report = () => {
	const [isloading, setIsLoading] = useState(false);
	const [Address, setAddress] = useState("");
	const [error, setError] = useState("");
	const [orders, setOrders] = useState([]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const res = await axios.get(`order/deliverer/GetGeneratepdf/${Address}`);
			if (res.status == 200) {
				setOrders(res.data);
				console.log(res.data);
				setIsLoading(true);
				console.log(res.data.length);
				if (isloading) {
					// setTimeout(() => , 5000);
					generateReport();
					setIsLoading(false);
				}
				// if (res.data.length !== 0) {
				// 	setAddress("");
				// 	setError(
				// 		"Please enter a  different location!" +
				// 			"\n" +
				// 			"Looks like you don't have any delivered orders for this location."
				// 	);
				// }
			}
		} catch (error) {}
	};

	const generateReport = () => {
		const report = new jsPDF();
		const date = new Date();

		report.addImage(Logo, "png", 10, 10, 30, 5);
		report.setFontSize(20);
		report.text("Delivery Records Report", 75, 14);
		report.setFontSize(8);
		report.text("Name : Nanduni Weerasinghe", 10, 25);
		report.text(`Date   : ${date.toDateString()}`, 10, 30);
		report.text(
			`  Time  : ${date.toLocaleTimeString([], {
				hour: "2-digit",
				minute: "2-digit",
			})}`,
			10,
			35
		);
		report.setFontSize(8);
		report.text(` Location : ${Address}`, 135, 45);
		report.autoTable({
			margin: { top: 50 },
			columns: [
				{ header: "Customer", dataKey: "name" },
				{ header: "Location", dataKey: "location" },
				{ header: "Date", dataKey: "Date" },
			],
			body: orders.map((order) => ({
				name: order.CustomerName,
				location: order.Address,
				Date: order.StartDate,
			})),
		});
		report.save(`delivery-report-${Date()}.pdf`);
	};

	return (
		<div className="w-5/5">
			<form onSubmit={handleSubmit}>
				<div className="flex">
					<label class="text-gray-500 w-2/6 font-semibold mr-24 float-right mt-4">
						Enter location :
					</label>

					<LocationInput
						setAddress={setAddress}
						class="float-left w-7/12 mt-2 mb-6 px-4 py-2 border-2 rounded-lg border-blue-500 text-gray-700 focus:outline-none focus:border-blue-500"
					/>
				</div>

				<div className="mb-6">
					{error && <Error error={error} top="-top-2" />}
					<button
						type="submit"
						className="bg-light-blue float-right  mt-6 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 ml-36 rounded-xl  shadow hover:shadow-lg outline-none focus:outline-none  mb-1 ease-linear transition-all duration-150"
					>
						Generate
					</button>
				</div>

				<div className="text-left font-bold  w-2/3 p-0 mt-10">
					<Link to="/auth/deliverer/dashboard">
						<p className=" inline-flex text-right  text-gray-400">
							<AiOutlineRollback className="mr-2  font-bold" />
							Back to home page
						</p>
					</Link>
				</div>
			</form>
		</div>
	);
};

export default Report;
