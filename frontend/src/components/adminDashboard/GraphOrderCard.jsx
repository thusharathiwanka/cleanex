import React from "react";
import ReactApexChart from "react-apexcharts";

const GraphInfoCard = ({
	delay,
	graphNames,
	pending,
	processing,
	completed,
}) => {
	const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
	const pendingData = [];
	console.log(pending);
	// pendingData.push(
	// 	days.map((day, index) => {
	// 		return days[index] === pendingOrder.StartDate.substring(0, 3);
	// 	})
	// );

	const series = [
		{
			name: graphNames[0],
			data: [
				{ y: 31, x: "Mon" },
				{ y: 31, x: "Tue" },
				{ y: 31, x: "Wed" },
				{ y: 31, x: "Thu" },
				{ y: 31, x: "Fri" },
				{ y: 31, x: "Sat" },
				{ y: 31, x: "Sun" },
			],
		},
		{
			name: graphNames[1],
			data: [
				{ y: 31, x: "Mon" },
				{ y: 31, x: "Tue" },
				{ y: 31, x: "Wed" },
				{ y: 31, x: "Thu" },
				{ y: 31, x: "Fri" },
				{ y: 31, x: "Sat" },
				{ y: 31, x: "Sun" },
			],
		},
		{
			name: graphNames[2],
			data: [
				{ y: 31, x: "Mon" },
				{ y: 31, x: "Tue" },
				{ y: 31, x: "Wed" },
				{ y: 31, x: "Thu" },
				{ y: 31, x: "Fri" },
				{ y: 31, x: "Sat" },
				{ y: 31, x: "Sun" },
			],
		},
	];

	const options = {
		chart: {
			height: 350,
			type: "area",
			width: "100%",
			toolbar: {
				show: false,
			},
		},
		dataLabels: {
			enabled: false,
		},
		stroke: {
			curve: "smooth",
		},
		xaxis: {
			type: "month",
		},
		tooltip: {
			x: {
				format: "dd/MM/yy HH:mm",
			},
		},
	};

	return (
		<div
			className="w-1/2 shadow-lg rounded-xl p-8 bg-white m-8 flex justify-between flex-wrap"
			data-aos="fade-up"
			data-aos-delay={delay}
		>
			<h3>Orders Summary</h3>
			<ReactApexChart
				options={options}
				series={series}
				type="area"
				height={350}
				width={600}
			/>
		</div>
	);
};

export default GraphInfoCard;
