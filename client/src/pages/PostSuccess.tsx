import { Link } from "react-router-dom";

export default function PostSuccess() {
  return (
    <main className="flex p-6">
      <div className="mx-auto flex max-w-7xl flex-1 flex-col items-center gap-5 rounded-md bg-white p-6 shadow">
        <img src="/check.gif" alt="" />
        <h2 className="text-lg">Your Post has been Submitted successfuly</h2>
        <Link
          to="/"
          className="w-48 rounded bg-sky-600 py-2 text-center text-base font-medium text-white"
        >
          OK
        </Link>
      </div>
    </main>
  );
}
