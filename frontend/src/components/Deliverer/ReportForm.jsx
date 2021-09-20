import { AiOutlineRollback } from "react-icons/ai";
import { Link } from "react-router-dom";
import "react-dates/initialize";
import { DateRangePicker } from "react-dates";

import "react-dates/lib/css/_datepicker.css";

import { useState } from "react";

const Report = () => {
	const [startDate, setStartDate] = useState(null);
	const [endDate, setEndDate] = useState(null);
	const [focusedInput, setFocusedInput] = useState(null);
	const handleDatesChange = ({ startDate, endDate }) => {
		setStartDate(startDate);
		setEndDate(endDate);
	};
	const handleSubmit = () => {
		try {
		} catch (error) {}
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<div className="flex">
					<label class="text-gray-500 w-2/6 font-semibold mr-24 float-right mt-4">
						Enter location :
					</label>

					<input
						type="text"
						placeholder="Enter your input here"
						class="  float-left w-7/12 mt-2 mb-6 px-4 py-2 border-2 rounded-lg border-blue-500 text-gray-700 focus:outline-none focus:border-blue-500"
					/>
				</div>

				<div className=" flex">
					<label class="text-gray-500 w-2/6 font-semibold mr-20 float-right mt-4 ">
						Enter Date range :
					</label>

					<DateRangePicker
						startDate={startDate}
						startDateId="tata-start-date"
						endDate={endDate}
						endDateId="tata-end-date"
						onDatesChange={handleDatesChange}
						focusedInput={focusedInput}
						onFocusChange={(focusedInput) => setFocusedInput(focusedInput)}
						isOutsideRange={() => false}
					/>
				</div>
				<div className="mb-6">
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
