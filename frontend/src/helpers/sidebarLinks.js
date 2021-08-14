import { MdDashboard, MdStyle, MdFeedback } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { BsBookHalf } from "react-icons/bs";

const sidebarLinks = [
	{ name: "Dashboard", path: "/admin/dashbaord", icon: <MdDashboard /> },
	{ name: "Pricing & Packages", path: "/admin/pricing", icon: <MdStyle /> },
	{ name: "Customers", path: "admin/customers", icon: <FaUsers /> },
	{ name: "Feedbacks", path: "admin/feedbacks", icon: <MdFeedback /> },
	{ name: "Blogs", path: "admin/blogs", icon: <BsBookHalf /> },
];

export { sidebarLinks };
