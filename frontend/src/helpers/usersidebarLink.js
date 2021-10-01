import {
  RiLogoutBoxFill,
  RiHome2Fill,
  RiUser3Fill,
  RiEdit2Fill,
  RiFeedbackFill,
  RiChatHistoryFill,
} from "react-icons/ri";
const usersidebar = [
  { name: "Home", path: "/", icon: <RiHome2Fill /> },
  { name: "Profile", path: "/auth/user/profile", icon: <RiUser3Fill /> },
  {
    name: "Edit Profile",
    path: "/auth/user/userprofileeditdelete",
    icon: <RiEdit2Fill />,
  },
  { name: "Feedback", path: "/auth/user/feedback", icon: <RiFeedbackFill /> },
  {
    name: "All order history",
    path: "/auth/user/allorderhistory",
    icon: <RiChatHistoryFill />,
  },
  { name: "Sign Out", path: "", icon: <RiLogoutBoxFill /> },
];
export { usersidebar };
