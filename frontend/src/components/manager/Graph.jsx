import React from 'react'
import ReactApexChart from "react-apexcharts";

const Graph = () => {

    const series = [
		{
			name: "series1",
			data: [31, 40, 28, 51, 42, 109, 100],
		}
		
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
        <div className="    ">
            <label className="flex justify-center text-xl font-semibold ">Daily Income</label>
            <ReactApexChart
				options={options}
				series={series}
				type="area"
				height={350}
				width={700}
			/>
        </div>
    )
}

export default Graph
