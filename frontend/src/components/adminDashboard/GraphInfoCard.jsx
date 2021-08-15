import React from "react";
import ReactApexChart from "react-apexcharts";

const GraphInfoCard = () => {
	const series = [
		{
			name: "series1",
			data: [31, 40, 28, 51, 42, 109, 100],
		},
		{
			name: "series2",
			data: [11, 32, 45, 32, 34, 52, 41],
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
			type: "datetime",
			categories: [
				"2018-09-19T00:00:00.000Z",
				"2018-09-19T01:30:00.000Z",
				"2018-09-19T02:30:00.000Z",
				"2018-09-19T03:30:00.000Z",
				"2018-09-19T04:30:00.000Z",
				"2018-09-19T05:30:00.000Z",
				"2018-09-19T06:30:00.000Z",
			],
		},
		tooltip: {
			x: {
				format: "dd/MM/yy HH:mm",
			},
		},
	};

	return (
		<div className="w-1/2 shadow-lg rounded-xl p-8 bg-white m-8 flex justify-between flex-wrap">
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
