import React from "react";
import LogoBlue from "../../assets/images/logo-blue.png";
import { usersidebar } from "../../helpers/usersidebarLink";
import UserSidebarItem from "./UserSidebarItem";

const Sidebar = () => {
  const sidebarLinks = usersidebar;
  const activeLink = sidebarLinks.findIndex(
    (item) => item.path === window.location.pathname
  );

  return (
    <div className="flex flex-col w-80 bg-white overflow-hidden shadow-xl h-screen fixed top-0 left-0">
      <div className="flex items-center justify-center h-20 mt-5">
        <img src={LogoBlue} alt="blue-logo" />
      </div>
      <ul className="flex flex-col pt-5 pl">
        {sidebarLinks.map((sidebarLink, index) => (
          <UserSidebarItem
            key={index}
            sidebarLink={sidebarLink}
            activeLink={index === activeLink}
          />
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
