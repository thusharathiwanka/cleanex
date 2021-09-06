import React from "react";
import UserSidebar from "../components/userSidebar/UserSidebar";
import UserInformation from "../components/userProfile/UserInformation";

const UserProfile = () => {
  return (
    <div>
      <UserSidebar />
      <UserInformation />
    </div>
  );
};

export default UserProfile;
