import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import userRoles from "../data/userRoles.json";
import AccessDenied from "../pages/AccessDenied";
import Chat from "../pages/Chat";
import CreateNewPost from "../pages/CreateNewPost";
import DistrictHome from "../pages/DistrictHome";
import Home from "../pages/Home";
import PostSuccess from "../pages/PostSuccess";
import Posts from "../pages/Posts";
import StateHome from "../pages/StateHome";
import StationHome from "../pages/StationHome";
import getUserRole from "../utils/getUserRole";

function ProtectedRoutes() {
  const [role, setRole] = useState<string>("");

  useEffect(() => {
    const userRole = async () => setRole(await getUserRole());
    if (localStorage.getItem("token")) {
      userRole();
    }
  }, []);

  switch (role) {
    case userRoles["normal"]:
      return (
        <React.Fragment>
          <Route index element={<Home />} />
          <Route path="create" element={<CreateNewPost />} />
          <Route path="success" element={<PostSuccess />} />
          <Route path="chat" element={<Chat />} />
          <Route path="post" element={<Posts />} />
        </React.Fragment>
      );
    case userRoles["station"]:
      return (
        <React.Fragment>
          <Route index element={<StationHome />} />
        </React.Fragment>
      );
    case userRoles["district"]:
      return (
        <React.Fragment>
          <Route index element={<DistrictHome />} />
        </React.Fragment>
      );
    case userRoles["state"]:
      return (
        <React.Fragment>
          <Route index element={<StateHome />} />
        </React.Fragment>
      );

    default:
      return (
        <React.Fragment>
          <Route index element={<AccessDenied />} />
        </React.Fragment>
      );
  }
}
export default ProtectedRoutes;
