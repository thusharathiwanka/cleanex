import { MdDashboard, MdStyle, MdFeedback } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { RiLogoutBoxFill } from "react-icons/ri";
import { IoDocumentText } from "react-icons/io5";

const sidebarLinksAdmin = [
	{ name: "Dashboard", path: "/auth/admin/dashboard", icon: <MdDashboard /> },
	{
		name: "Pricing & Packages",
		path: "/auth/admin/packages",
		icon: <MdStyle />,
	},
	{ name: "Customers", path: "/auth/admin/customers", icon: <FaUsers /> },
	{ name: "Feedbacks", path: "/auth/admin/feedbacks", icon: <MdFeedback /> },
	{ name: "Reports", path: "/auth/admin/reports", icon: <IoDocumentText /> },
	{ name: "Sign Out", path: "", icon: <RiLogoutBoxFill /> },
];

export { sidebarLinksAdmin };
