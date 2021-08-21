import React from "react";
import Sidebar from "../components/sidebar/Sidebar";
import UserInformation from "../components/userProfile/UserInformation";

const UserProfile = () => {
  return (
    <div>
      <Sidebar />
      <UserInformation />
    </div>
  );
};

export default UserProfile;
