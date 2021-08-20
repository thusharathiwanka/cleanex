import React from "react";
import image from "../../assets/images/bucket.png";
import icon1 from "../../assets/images/minus.png";
import icon2 from "../../assets/images/Group.png";

const List = () => {
	return (
		<div>
			<div className="text-lg ml-20 max-w-sm pt-3 pb-2 border border-blue-200 mt-10 mb-20 max-h-24 inline-block">
				<p className="text-gray-500  ml-8 max-w-7  max-h-8">
					Your Laundry Bag
					<img
						className="max-w-min  max-h-7  float-right mr-7 ml-5  "
						src={image}
						alt=""
					/>
				</p>
			</div>
			<hr className="mb-10 max-w-5xl  ml-auto mr-auto border-blue-100 h-3 " />
			<table className="w-9/12 ml-auto mr-auto mb-10">
				<thead>
					<tr className="text-gray-400 text-base">
						<th className="w-60 h-10 ">Quantity</th>
						<th className="w-60 h-10">Laundry Item</th>
						<th className="w-60 h-10">Price per Item</th>
						<th className="w-60 h-10">Total Price</th>
					</tr>
				</thead>
				<tbody>
					<tr className="text-gray-600 bg-gray-100 h">
						<td className="w-60 h-20 text-center">
							<div className="inline-flex gap-10 ">
								<img className="w-7 h-7" src={icon2} alt="" />
								<img className="w-7 h-7" src={icon1} alt="" />
							</div>
						</td>

						<td className="w-60 h-20 text-center">
							<p>Trouser</p>
						</td>
						<td className="w-60  h-20 text-center">
							<p>Rs 150.00</p>
						</td>
						<td className="w-60  h-20 text-center">
							<p>Rs 300.00</p>
						</td>
					</tr>
				</tbody>
			</table>
			<hr className="mb-10 max-w-5xl  ml-auto mr-auto border-blue-100  " />
		</div>
	);
};

export default List;
