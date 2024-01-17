import { Link } from "react-router-dom";
import Header from "../components/Header";

function DistrictHome() {
  return (
    <div className="pb-1">
      <Header />
      <div className="mx-auto my-10 grid max-w-4xl gap-3 rounded-lg border bg-white p-3 shadow-md">
        <div className="rounded-md bg-red-100 py-3 text-center text-lg font-bold text-red-600">
          District Level Access
        </div>
        <div className="flex flex-wrap gap-3">
          <Link
            to="/complain"
            className="flex-1 rounded-md bg-sky-600 px-4 py-2 text-center font-medium text-white hover:bg-sky-500"
          >
            View Complains
          </Link>
          <Link
            to="/feedbacks"
            className="flex-1 rounded-md bg-sky-600 px-4 py-2 text-center font-medium text-white hover:bg-sky-500"
          >
            View District Summary
          </Link>
        </div>
      </div>
    </div>
  );
}
export default DistrictHome;
