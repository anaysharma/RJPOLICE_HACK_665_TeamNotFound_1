import { Link } from "react-router-dom";

export default function SideBar() {
  return (
    <aside className="sticky top-16 h-fit max-w-72 overflow-hidden rounded-md bg-white shadow-md max-md:top-28 max-md:hidden">
      <div className="">
        <div className="font-medium text-white">
          <div className="flex items-end gap-2 bg-sky-600 p-2 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="3rem"
              height="3rem"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M12 13q1.45 0 2.475-1.025T15.5 9.5q0-1.45-1.025-2.475T12 6q-1.45 0-2.475 1.025T8.5 9.5q0 1.45 1.025 2.475T12 13m-7 8q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm0-2h14v-1.15q-1.35-1.325-3.137-2.087T12 15q-2.075 0-3.863.763T5 17.85z"
              ></path>
            </svg>
            <span className="text-lg capitalize">User Name</span>
          </div>
          <p className="p-3 text-center font-normal text-slate-800">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
            voluptate praesentium beatae consequatur sunt nulla consectetur
            rerum
          </p>
        </div>
        <div className="grid gap-2 border-t bg-gray-50 p-3">
          <span className="border-b pb-2 font-medium text-sky-700">
            Account
          </span>
          <Link to="/" className="hover:underline">
            View Profile
          </Link>
          <Link to="/" className="hover:underline">
            Update Profile
          </Link>
          <Link to="/" className="hover:underline">
            Update Documents
          </Link>
        </div>
        <div className="grid gap-2 border-t bg-gray-50 p-3">
          <span className="border-b pb-2 font-medium text-sky-700">Links</span>
          <Link to="/" className="hover:underline">
            View Analytics
          </Link>
          <Link to="/" className="hover:underline">
            Recent Reports
          </Link>
          <Link to="/" className="hover:underline">
            Trending Posts
          </Link>
          <Link to="/" className="hover:underline">
            Summary
          </Link>
          <Link to="/" className="hover:underline">
            Notices
          </Link>
        </div>
        <div className="grid gap-2 border-t bg-gray-50 p-3">
          <span className="border-b pb-2 font-medium text-sky-700">Recent</span>
          <Link to="/" className="hover:underline">
            Reports
          </Link>
          <Link to="/" className="hover:underline">
            Feedbacks
          </Link>
          <Link to="/" className="hover:underline">
            Converstions
          </Link>
        </div>
      </div>
    </aside>
  );
}
