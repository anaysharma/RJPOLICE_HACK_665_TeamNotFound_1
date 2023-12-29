import { Route, Routes, useLocation } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { AnimatePresence } from "framer-motion";
import CreateNewPost from "./pages/CreateNewPost";
import { useLayoutEffect } from "react";
import PostSuccess from "./pages/PostSuccess";

function App() {
  const location = useLocation();
  useLayoutEffect(
    () => document.documentElement.scrollTo(0, 0),
    [location.pathname],
  );
  return (
    <AnimatePresence mode="wait">
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="create" element={<CreateNewPost />} />
          <Route path="success" element={<PostSuccess />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
