import { Link } from "react-router-dom";

function AccessDenied() {
  return (
    <div className="grid h-svh place-items-center">
      <div className="grid gap-4 rounded bg-red-200 p-6 text-center text-2xl">
        Access Denied !
        <span>
          please{" "}
          <Link
            to="/login"
            className="font-medium text-sky-500 hover:underline"
          >
            Login
          </Link>
        </span>
      </div>
    </div>
  );
}
export default AccessDenied;
