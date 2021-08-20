import React from "react";
import Sidebar from "../components/sidebar/Sidebar";
import UserInformation from "../components/userProfile/UserInformation";
import EditDelete from "../components/userProfile/EditDelete";
import Feedback from "../components/userProfile/Feedback";
import ViewOrder from "../components/userProfile/ViewOrder";
import AllOrderHistory from "../components/userProfile/AllOrderHistory";

const UserProfile = () => {
  return (
    <div>
      <Sidebar />
      {/* <UserInformation /> */}
      {/* <EditDelete /> */}
      {/* <Feedback /> */}
      {/* <AllOrderHistory /> */}
      <ViewOrder />
    </div>
  );
};

export default UserProfile;
