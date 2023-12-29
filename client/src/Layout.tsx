import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Layout(): JSX.Element {
  return (
    <>
      <Navbar />
      <div className="bg-slate-100 pt-12 max-md:pt-24">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
