import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import setDocumentTitle from "../utils/setDocumentTitle";

export default function Signup(): JSX.Element {
  setDocumentTitle("Signup | Police Feedback Hub");
  const navigate = useNavigate();

  return (
    <>
      <main className="relative flex h-svh flex-col items-center justify-center bg-slate-100 px-4 max-sm:justify-end">
        <div className="absolute left-0 right-0 top-0 z-0 h-1/2">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-100"></div>
          <img src="bg.jpg" alt="" className="h-full w-full object-cover" />
        </div>
        <h1 className="z-10 flex items-center py-6 text-2xl font-bold max-sm:flex-1">
          Police Feedback System
        </h1>
        <form
          action="/"
          method="post"
          className="z-10 mx-4 grid w-full gap-3 rounded-lg border bg-white p-4 shadow-md sm:w-[500px]"
        >
          <legend className="text-lg font-bold">Quick Signup: </legend>
          <div className="grid gap-4">
            <label className="grid gap-2 text-slate-600" htmlFor="firstname">
              First Name
              <input
                className="rounded border bg-slate-50 px-4 py-2"
                type="text"
                name="firstname"
                id="firstname"
                placeholder="type your first name"
              />
            </label>
            <label className="grid gap-2 text-slate-600" htmlFor="firstname">
              Last Name
              <input
                className="rounded border bg-slate-50 px-4 py-2"
                type="text"
                name="lastname"
                id="lastname"
                placeholder="type your last name"
              />
            </label>
            <label className="grid gap-2 text-slate-600" htmlFor="firstname">
              Mobile Number
              <input
                className="rounded border bg-slate-50 px-4 py-2"
                type="text"
                name="number"
                id="number"
                placeholder="+91 not required"
              />
            </label>
            <label className="grid gap-2 text-slate-600" htmlFor="firstname">
              Permanent Address
              <input
                className="rounded border bg-slate-50 px-4 py-2"
                type="text"
                name="address"
                id="address"
                placeholder="enter detailed address"
              />
            </label>
          </div>
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <button
              className="flex-grow basis-48 rounded border-2 border-sky-600 bg-sky-600 py-2 text-white hover:border-sky-500 hover:bg-sky-500"
              type="button"
            >
              Signup
            </button>
            <button
              onClick={() => navigate("/")}
              className="flex-grow basis-48 rounded border-2 border-sky-600 py-2 text-sky-700 hover:border-sky-500 hover:bg-sky-500 hover:text-white"
              type="button"
            >
              cancel
            </button>
          </div>
        </form>
        <div className="py-6 text-center">
          already have an account?{" "}
          <Link to="/login" className="text-sky-700 hover:underline">
            login instead
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
