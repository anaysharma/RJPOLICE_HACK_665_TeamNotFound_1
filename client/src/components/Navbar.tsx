import { Link } from "react-router-dom";

export default function Navbar(): JSX.Element {
  return (
    <nav className="fixed inset-0 bottom-auto z-50 bg-white shadow-md md:px-4 md:py-1">
      <div className="mx-auto grid max-w-7xl grid-cols-3 items-center max-md:grid-cols-2 lg:px-4">
        <div className="flex items-center gap-3 font-bold max-md:py-2 max-md:pl-4">
          <img src="/logo.png" alt="" className="h-10" />
          <span className="font-bold max-lg:hidden">Police Feedback Hub</span>
        </div>
        <ul className="flex justify-center gap-3 py-3 max-md:col-start-1 max-md:col-end-3 max-md:border-t max-sm:justify-evenly">
          <li>
            <Link to="/">Posts</Link>
          </li>
          <li>
            <Link to="/">Helpline</Link>
          </li>
          <li>
            <Link to="/">Explore</Link>
          </li>
          <li>
            <Link to="/">Accounts</Link>
          </li>
        </ul>
        <div className="flex gap-3 justify-self-end max-md:col-start-2 max-md:row-start-1  max-md:py-2 max-md:pr-4">
          <Link
            to="/create"
            className="w-28 whitespace-nowrap rounded bg-sky-600 py-1 text-center text-white hover:bg-sky-500"
          >
            New Post +
          </Link>
          <Link
            to="/login"
            className="w-20 rounded bg-sky-600 py-1 text-center text-white hover:bg-sky-500"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="w-20 rounded border-2 border-sky-600 py-1 text-center text-sky-700 hover:bg-sky-500 hover:text-white"
          >
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
}
