import React from "react";
import image from "../../assets/images/images-removebg-preview.png";
import iconPlus from "../../assets/images/Group.png";

const Item = () => {
	return (
		<div
			className="transition duration-500"
			style={{
				maxWidth: "200px",
				maxHeight: "400px",
				borderRadius: "15px",
				marginTop: "20px",
				marginLeft: "20px",
				boxShadow: "0px 10px 20px 1px rgba(0, 0, 0, 0.25)",
			}}
		>
			<div className="bg-gray-50">
				<button
					className="hover:shadow-2xl transition duration-500"
					style={{
						float: "right",
						marginRight: "10px",
						marginTop: "10px",
						maxHeight: "40px",
						maxWidth: "40px",
					}}
				>
					<img src={iconPlus} alt="" />
				</button>

				<img
					style={{ maxWidth: "140px", maxHeight: "200px", float: "right" }}
					src={image}
					alt=""
				/>
			</div>

			<div
				style={{
					borderRadius: "15px",
					color: "yellow",
					textAlign: "center",
					marginBottom: "15px",
					backgroundColor: "yellow",
					height: "15px",
				}}
			>
				<h1 className=" text-black  font-semibold ">Aloe Cactus</h1>
				<p className=" text-black">$11.99</p>
			</div>
		</div>
	);
};

export default Item;
