import { RiLogoutBoxFill } from "react-icons/ri";
const usersidebar = [
  { name: "Profile", path: "/auth/user/profile" },
  { name: "Edit Profile", path: "/auth/user/userprofileeditdelete" },
  { name: "Feedback", path: "/auth/user/feedback" },
  { name: "All order hitory", path: "/auth/user/allorderhistory" },
  { name: "Sign Out", path: "", icon: <RiLogoutBoxFill /> },
];
export { usersidebar };
