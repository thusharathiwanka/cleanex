import { useState, useEffect } from "react";
const Deliverer_list = () => {
	const [Orders, setOrders] = useState(null);
	const [Id, setId] = useState(null);
	const accept = (id) => {
		setId(id);
	};
	useEffect(() => {
		fetch(`http://localhost:5000/orders`, {
			method: "GET",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
				"Access-Control-Allow-Headers": "*",
			},
		})
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				setOrders(data);
			});
	}, []);
	return (
		<div
			style={{
				marginTop: "50px",
				marginLeft: "150px",
				marginRight: "150px",
			}}
		>
			<div className="flex flex-col">
				<div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
					<div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
						<div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
							<table className="min-w-full divide-y divide-gray-200">
								<thead className="bg-gray-100">
									<tr>
										<th
											scope="col"
											className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
										>
											Address
										</th>
										<th
											scope="col"
											className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
										>
											Customer
										</th>
										<th
											scope="col"
											className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
										>
											Date
										</th>
										<th
											scope="col"
											className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
										>
											Status
										</th>

										<th scope="col" className="relative px-6 py-3">
											<span className="sr-only">Accept</span>
										</th>
									</tr>
								</thead>
								<tbody className="bg-white divide-y divide-gray-200">
									<tr>
										<td className="px-6 py-4 whitespace-nowrap">
											<div className="flex items-center">
												<div className="text-sm text-gray-900">
													14/7,Smagi Uyana, Nagoda,Bombuwala.
												</div>
											</div>
										</td>
										<td className="px-6 py-4 whitespace-nowrap">
											<div className="text-sm text-gray-900">
												Mr Weerasinghe
											</div>
										</td>
										<td className="px-6 py-4 whitespace-nowrap">
											<div className="text-sm text-gray-900">2021/09/20</div>
										</td>
										<td className="px-6 py-4 whitespace-nowrap">
											<span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-500">
												Pending
											</span>
										</td>

										<td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
											<a
												href="www.google.com"
												className="text-green-500 hover:text-green-200"
											>
												Accept
											</a>
										</td>
										<td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
											<a
												href="www.google.com"
												className="text-red-500 hover:text-red-200"
											>
												Error
											</a>
										</td>
									</tr>
									<tr>
										<td className="px-6 py-4 whitespace-nowrap">
											<div className="flex items-center">
												<div className="text-sm text-gray-900">
													14/7,Smagi Uyana, Nagoda,Bombuwala.
												</div>
											</div>
										</td>
										<td className="px-6 py-4 whitespace-nowrap">
											<div className="text-sm text-gray-900">
												Mr Weerasinghe
											</div>
										</td>
										<td className="px-6 py-4 whitespace-nowrap">
											<div className="text-sm text-gray-900">2021/09/20</div>
										</td>
										<td className="px-6 py-4 whitespace-nowrap">
											<span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-500">
												Pending
											</span>
										</td>

										<td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
											<a
												href="www.google.com"
												className="text-green-500 hover:text-green-200"
											>
												Accept
											</a>
										</td>
									</tr>
									<tr>
										<td className="px-6 py-4 whitespace-nowrap">
											<div className="flex items-center">
												<div className="text-sm text-gray-900">
													14/7,Smagi Uyana, Nagoda,Bombuwala.
												</div>
											</div>
										</td>
										<td className="px-6 py-4 whitespace-nowrap">
											<div className="text-sm text-gray-900">
												Mr Weerasinghe
											</div>
										</td>
										<td className="px-6 py-4 whitespace-nowrap">
											<div className="text-sm text-gray-900">2021/09/20</div>
										</td>
										<td className="px-6 py-4 whitespace-nowrap">
											<span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-500">
												Pending
											</span>
										</td>

										<td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
											<a
												href="www.google.com"
												className="text-green-500 hover:text-green-200"
											>
												Delivered
											</a>
										</td>
										<td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
											<a
												href="www.google.com"
												className="text-red-500 hover:text-red-200"
											>
												Error
											</a>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Deliverer_list;
