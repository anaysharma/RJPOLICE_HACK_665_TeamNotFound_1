import { AnimatePresence } from "framer-motion";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Layout from "./Layout";
import userRoles from "./data/userRoles.json";
import AccessDenied from "./pages/AccessDenied";
import Chat from "./pages/Chat";
import Complaints from "./pages/Complaints";
import CreateComplaint from "./pages/CreateComplaint";
import CreateNewPost from "./pages/CreateNewPost";
import DistrictHome from "./pages/DistrictHome";
import Home from "./pages/Home";
import Login from "./pages/Login";
import PostSuccess from "./pages/PostSuccess";
import Posts from "./pages/Posts";
import Signup from "./pages/Signup";
import SignupSuccess from "./pages/SignupSuccess";
import StateHome from "./pages/StateHome";
import StationHome from "./pages/StationHome";
import StationSummary from "./pages/StationSummary";
import Summary from "./pages/Summary";
import getUserRole from "./utils/getUserRole";

function App() {
  const location = useLocation();

  const [role, setRole] = useState<string>("");

  useEffect(() => {
    const userRole = async () => setRole(await getUserRole());
    if (localStorage.getItem("token")) {
      userRole();
    }
  }, [location]);

  useLayoutEffect(
    () => document.documentElement.scrollTo(0, 0),
    [location.pathname],
  );

  return (
    <AnimatePresence mode="wait">
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<Layout />}>
          {role === "" && <Route index element={<AccessDenied />} />}

          {role === userRoles["normal"] && (
            <React.Fragment>
              <Route index element={<Home />} />
              <Route path="create" element={<CreateNewPost />} />
              <Route path="success" element={<PostSuccess />} />
              <Route path="complaint" element={<CreateComplaint />} />
              <Route path="chat" element={<Chat />} />
              <Route path="post" element={<Posts />} />
            </React.Fragment>
          )}

          {role === userRoles["station"] && (
            <React.Fragment>
              <Route index element={<StationHome />} />
            </React.Fragment>
          )}

          {role === userRoles["district"] && (
            <React.Fragment>
              <Route index element={<DistrictHome />} />
              <Route path="complain" element={<Complaints />} />
              <Route path="summary" element={<Summary />} />
              <Route path="summary/station" element={<StationSummary />} />
            </React.Fragment>
          )}

          {role === userRoles["state"] && (
            <React.Fragment>
              <Route index element={<StateHome />} />
            </React.Fragment>
          )}
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signupsuccess" element={<SignupSuccess />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
