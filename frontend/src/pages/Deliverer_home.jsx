import OrderList from "../components/Deliverer/OrderList";

const Deliverer_home = () => {
	return (
		<div>
			<div
				className="flex items-center"
				style={{ marginTop: "150px", marginLeft: "150px" }}
			>
				<div className="flex-shrink-0 h-10 w-10">
					<img
						className="h-10 w-10 rounded-full"
						src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
						alt=""
					/>
				</div>
				<div className="ml-4">
					<div className="text-sm font-medium text-gray-900">Jane Cooper</div>
					<div className="text-sm text-gray-500">jane.cooper@example.com</div>
				</div>
				<button
					style={{ width: "220px", float: "right", marginLeft: "590px" }}
					className="bg-blue-400 hover:bg-blue-200 text-white font-bold py-2 px-4 rounded-full"
				>
					My Deliveries
				</button>
			</div>
			<div
				className="flex items-center"
				style={{ marginTop: "150px", marginLeft: "150px" }}
			>
				<button
					style={{ marginRight: "20px", width: "120px" }}
					className="bg-blue-400 hover:bg-blue-200 text-white font-bold py-2 px-4 rounded-full"
				>
					Pick Up
				</button>
				<button
					style={{ width: "120px" }}
					className="bg-blue-400 hover:bg-blue-200 text-white font-bold py-2 px-4 rounded-full"
				>
					Deliver
				</button>
			</div>
			<OrderList />
		</div>
	);
};

export default Deliverer_home;
