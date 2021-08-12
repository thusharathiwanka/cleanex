import React from "react";
import image from "../../assets/images/images-removebg-preview.png";
import iconPlus from "../../assets/images/Group.png";
const Item = () => {
	return (
		<div>
			<div className="min-h-screen bg-gray-100 flex items-center">
				<div className="container mx-auto bg-white max-w-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-300">
					<button
						style={{ marginLeft: "270px", marginRight: "5px" }}
						className="text-white text-md mt-6 font-semibold py-2 px-2 rounded-lg shadow-md hover:shadow-lg transition duration-500 transform-gpu hover:scale-110 "
					>
						<img className="rounded-x" src={iconPlus} alt="" />
					</button>

					<img
						style={{
							marginLeft: "97px",
							marginRight: "97px",
						}}
						className="rounded-x "
						src={image}
						alt=""
					/>
					<div
						style={{
							paddingLeft: "80px",
							paddingRight: "80px",
							margin: "0px",
							textAlign: "center",
						}}
						className="py-2 rounded-2xl bg-light-blue"
					>
						<div>
							<h1 className="mt-3 text-white text-xl font-semibold">
								Aloe Cactus
							</h1>
							<p className="mt-2 text-white">$11.99</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Item;
