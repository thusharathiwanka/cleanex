import React from "react";
import ProfileDelete from "../components/userProfile/UserProfileDelete";
import UserSidebar from "../components/userSidebar/UserSidebar";

const UserProfileDelete = () => {
  return (
    <div>
      <UserSidebar />
      <ProfileDelete />
    </div>
  );
};

export default UserProfileDelete;
