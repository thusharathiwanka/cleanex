import { MdStyle, MdFeedback } from "react-icons/md";
import { FaUsers } from "react-icons/fa";

const adminCardInfo = [
	{ name: "Total Packages", icon: <MdStyle />, endpoint: "/packages/total" },
	{ name: "Total Customers", icon: <FaUsers />, endpoint: "/customers/total" },
	{
		name: "Total Feedbacks",
		icon: <MdFeedback />,
		endpoint: "/feedbacks/total",
	},
];

export { adminCardInfo };
