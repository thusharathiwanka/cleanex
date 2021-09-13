import { MdDashboard, MdStyle, MdFeedback } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { BsBookHalf } from "react-icons/bs";
import { RiLogoutBoxFill } from "react-icons/ri";

const sidebarLinksAdmin = [
	{ name: "Dashboard", path: "/auth/admin/dashboard", icon: <MdDashboard /> },
	{
		name: "Pricing & Packages",
		path: "/auth/admin/packages",
		icon: <MdStyle />,
	},
	{ name: "Customers", path: "/auth/admin/customers", icon: <FaUsers /> },
	{ name: "Feedbacks", path: "/auth/admin/feedbacks", icon: <MdFeedback /> },
	{ name: "Blogs", path: "/auth/user/blogs", icon: <BsBookHalf /> },
	{ name: "Sign Out", path: "", icon: <RiLogoutBoxFill /> },
];

export { sidebarLinksAdmin };
