import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import setDocumentTitle from "../utils/setDocumentTitle";

export default function Login(): JSX.Element {
  setDocumentTitle("Login | Police Feedback Hub");
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [toggleVisibility, setToggleVisibility] = useState<boolean>(false);
  const [role, setRole] = useState<string>("FeedbackSubmitter");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    axios({
      method: "post",
      url: "http://localhost:3000/api/v1/user/login",
      data: { email, password, role },
    })
      .then((res) => res.data)
      .then((data) => {
        localStorage.setItem("token", data.token);
        navigate("/");
      })
      .catch(() => alert("something went wrong, please try again."));
  };

  return (
    <>
      <main className="relaive flex h-svh flex-col items-center justify-center bg-slate-100 px-4 max-sm:justify-end">
        <div className="absolute left-0 right-0 top-0 z-0 h-1/2">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-100"></div>
          <img src="bg.jpg" alt="" className="h-full w-full object-cover" />
        </div>
        <h1 className="z-10 flex flex-col items-center gap-6 py-6 text-center text-2xl font-bold drop-shadow-lg max-sm:flex-1">
          Police Feedback System
          <div className="grid w-full justify-items-center gap-3 rounded-lg border bg-white/80 p-3 text-lg font-normal">
            <label htmlFor="role">Login as</label>
            <select
              name="role"
              id="role"
              className="w-full rounded-md border px-3 py-2 text-base"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="FeedbackSubmitter" defaultChecked>
                Normal User
              </option>
              <option value="PoliceStationUser">Station Admin</option>
              <option value="DistrictUser">District Admin</option>
              <option value="StateUser">State Admin</option>
            </select>
          </div>
        </h1>
        <form
          onSubmit={handleSubmit}
          className="z-10 mx-4 grid w-full gap-3 rounded-lg border bg-white p-4 shadow-md sm:w-[500px]"
        >
          <legend className="text-lg font-bold">Login to get started: </legend>
          <div className="grid gap-4">
            <label className="grid gap-2 text-slate-600" htmlFor="email">
              Email
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="rounded border bg-slate-50 px-4 py-2"
                type="text"
                name="email"
                id="email"
                placeholder="type your email"
              />
            </label>
            <label className="grid gap-2 text-slate-600" htmlFor="password">
              Password
              <div className="relative flex items-center">
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full rounded border bg-slate-50 px-4 py-2"
                  type={toggleVisibility ? "text" : "password"}
                  name="password"
                  id="password"
                  placeholder="type here"
                />
                <button
                  className="absolute right-3"
                  type="button"
                  onClick={() => setToggleVisibility((prev) => !prev)}
                >
                  {toggleVisibility ? <IconEyeOpen /> : <IconEyeClose />}
                </button>
              </div>
            </label>
          </div>
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <button
              className="flex-grow basis-48 rounded border-2 border-sky-600 bg-sky-600 py-2 text-white hover:border-sky-500 hover:bg-sky-500"
              type="submit"
            >
              Login
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
          don't have an account yet?{" "}
          <Link to="/signup" className="text-sky-700 hover:underline">
            Sign up
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}

export const IconEyeClose = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="icon icon-tabler icon-tabler-eye-closed"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="#2c3e50"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M21 9c-2.4 2.667 -5.4 4 -9 4c-3.6 0 -6.6 -1.333 -9 -4" />
    <path d="M3 15l2.5 -3.8" />
    <path d="M21 14.976l-2.492 -3.776" />
    <path d="M9 17l.5 -4" />
    <path d="M15 17l-.5 -4" />
  </svg>
);
export const IconEyeOpen = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="icon icon-tabler icon-tabler-eye"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="#2c3e50"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
    <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" />
  </svg>
);
