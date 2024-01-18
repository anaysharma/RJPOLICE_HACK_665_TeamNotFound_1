import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import userRoles from "../data/userRoles.json";
import getUser from "../utils/getUser";

export default function Navbar(): JSX.Element {
  const [user, setUser] = useState();
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const set = async () => {
      const usr = await getUser();
      setUser(usr.user);
      setRole(usr.user.role);
    };
    set();
  }, []);

  const logOut = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <nav className="fixed inset-0 bottom-auto z-50 bg-white shadow-md md:px-4 md:py-1">
      <div className="mx-auto grid max-w-7xl grid-cols-3 items-center max-md:grid-cols-2 lg:px-4">
        <Link
          to="/"
          className="flex items-center gap-3 font-bold max-md:py-2 max-md:pl-4"
        >
          <img src="/logo.png" alt="" className="h-10" />
          <span className="font-bold max-lg:hidden">Police Feedback Hub</span>
        </Link>
        <ul className="flex justify-center gap-5 py-3 max-md:col-start-1 max-md:col-end-3 max-md:border-t max-sm:justify-evenly">
          {role === "" && "please login"}

          {role === userRoles["normal"] && (
            <>
              <li>
                <Link to="/post">Posts</Link>
              </li>
              <li>
                <Link to="/create">Feedback</Link>
              </li>
              <li>
                <Link to="/complaint">Complaint</Link>
              </li>
              <li>
                <Link to="/profile">Account</Link>
              </li>
            </>
          )}

          {role === userRoles["station"] && (
            <>
              <li>
                <Link to="/post">Posts</Link>
              </li>
              <li>
                <Link to="/create">Feedback</Link>
              </li>
              <li>
                <Link to="/complaint">Complaint</Link>
              </li>
              <li>
                <Link to="/profile">Account</Link>
              </li>
            </>
          )}

          {role === userRoles["district"] && (
            <>
              <li>
                <Link to="/summary">Summary</Link>
              </li>
              <li>
                <Link to="/complain">Complaints</Link>
              </li>
            </>
          )}

          {role === userRoles["state"] && (
            <>
              <li>
                <Link to="/post">Posts</Link>
              </li>
              <li>
                <Link to="/create">Feedback</Link>
              </li>
              <li>
                <Link to="/complaint">Complaint</Link>
              </li>
              <li>
                <Link to="/profile">Account</Link>
              </li>
            </>
          )}
        </ul>

        <div className="flex gap-3 justify-self-end max-md:col-start-2 max-md:row-start-1  max-md:py-2 max-md:pr-4">
          {user ? (
            <>
              <span className="grid">
                <span className="text-lg font-medium leading-5">
                  {user.firstName} {user.lastName}
                </span>
                {role !== userRoles["normal"] && (
                  <span className="text-sm text-red-600">{role}</span>
                )}
              </span>
              <button
                onClick={logOut}
                className="rounded-md border bg-slate-200 px-5 py-1"
              >
                Logout
              </button>
            </>
          ) : (
            <>
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
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
