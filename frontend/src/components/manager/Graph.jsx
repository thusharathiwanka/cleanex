import React from "react";
import ReactApexChart from "react-apexcharts";

const Graph = () => {
	const series = [
		{
			name: "series1",
			data: [1000, 5000, 20000, 10000, 15000, 18000, 20000],
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
				"2018-09-19",
				"2018-09-20",
				"2018-09-21",
				"2018-09-22",
				"2018-09-23",
				"2018-09-24",
				"2018-09-25",
			],
		},
		tooltip: {
			x: {
				format: "dd/MM/yy",
			},
		},
	};
	return (
		<div className="    ">
			<label className="flex justify-center text-xl font-semibold ">
				Daily Income
			</label>
			<ReactApexChart
				options={options}
				series={series}
				type="area"
				height={350}
				width={700}
			/>
		</div>
	);
};

export default Graph;
