import { Link, Outlet, useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export default function Layout(): JSX.Element {
  const { pathname } = useLocation();
  return (
    <>
      <Navbar />
      <div className="bg-slate-100 pt-12 max-md:pt-24">
        <Outlet />
      </div>
      <Link
        to="/chat"
        className={`chat-btn fixed bottom-6 right-6 z-[999] flex items-center gap-3 rounded-full bg-sky-600 px-6 py-2 font-medium text-white ${
          pathname == "/" ? "bottom-6" : "max-sm:bottom-24"
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M2 22V9q0-.825.588-1.413Q3.175 7 4 7h2V4q0-.825.588-1.413Q7.175 2 8 2h12q.825 0 1.413.587Q22 3.175 22 4v8q0 .825-.587 1.412Q20.825 14 20 14h-2v3q0 .825-.587 1.413Q16.825 19 16 19H5Zm6-10h8V9H8Zm-4 5h12v-3H8q-.825 0-1.412-.588Q6 12.825 6 12V9H4Zm14-5h2V4H8v3h8q.825 0 1.413.587Q18 8.175 18 9Z"
          ></path>
        </svg>
        Chat
      </Link>
      <Footer />
    </>
  );
}
