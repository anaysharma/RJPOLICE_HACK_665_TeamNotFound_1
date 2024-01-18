import axios from "axios";
import { useReducer, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import setDocumentTitle from "../utils/setDocumentTitle";
import { IconEyeClose, IconEyeOpen } from "./Login";

interface FormState {
  firstName: string;
  lastName: string;
  mobile: string;
  email: string;
  password: string;
  aadhar: string;
  address?: string;
  role?: string;
}

const formState: FormState = {
  firstName: "",
  lastName: "",
  mobile: "",
  email: "",
  password: "",
  aadhar: "",
  address: "",
  role: "FeedbackSubmitter",
};

const actionTypes = {
  firstName: "firstName",
  lastName: "lastName",
  mobile: "mobile",
  email: "email",
  password: "password",
  address: "address",
  aadhar: "aadhar",
  role: "role",
} as const;

const reducer = (
  state: FormState,
  { type, payload }: { type: string; payload: string },
): FormState => {
  const stateCopy = JSON.parse(JSON.stringify(state));
  stateCopy[type] = payload;
  return stateCopy;
};

export default function Signup(): JSX.Element {
  setDocumentTitle("Signup | Police Feedback Hub");
  const [toggleVisibility, setToggleVisibility] = useState<boolean>(false);
  const [state, dispatch] = useReducer(reducer, formState);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    axios({
      method: "post",
      url: "http://localhost:3000/api/v1/user/register",
      data: state,
    })
      .then(() => navigate("/signupsuccess"))
      .catch(() => alert("something went wrong, please try again."));
  };

  return (
    <>
      <main className="relative flex flex-col items-center justify-center bg-slate-100 px-4 max-sm:justify-end">
        <div className="absolute left-0 right-0 top-0 z-0 h-1/2">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-100"></div>
          <img src="bg.jpg" alt="" className="h-full w-full object-cover" />
        </div>
        <h1 className="z-10 flex flex-col items-center gap-6 py-6 text-2xl font-bold drop-shadow-lg max-sm:flex-1">
          Police Feedback System
        </h1>

        <form
          onSubmit={handleSubmit}
          className="z-10 mx-4 grid w-full gap-3 rounded-lg border bg-white p-4 shadow-md sm:w-[500px]"
        >
          <legend className="text-lg font-bold">Quick Signup: </legend>

          <div className="z-10 flex items-center justify-between  gap-3 rounded-lg">
            <label htmlFor="role" className="whitespace-nowrap">
              User Role:
            </label>
            <select
              name="role"
              id="role"
              className="w-full flex-1 basis-full rounded-md border px-3 py-2 text-base"
              value={state.role}
              onChange={(e) =>
                dispatch({
                  type: actionTypes.role,
                  payload: e.target.value,
                })
              }
            >
              <option value="FeedbackSubmitter" defaultChecked>
                Normal User
              </option>
              <option value="PoliceStationUser">Station Admin</option>
              <option value="DistrictUser">District Admin</option>
              <option value="StateUser">State Admin</option>
            </select>
          </div>
          <div className="grid gap-4">
            <label className="grid gap-2 text-slate-600" htmlFor="firstname">
              First Name
              <input
                value={state.firstName}
                onChange={(e) =>
                  dispatch({
                    type: actionTypes.firstName,
                    payload: e.target.value,
                  })
                }
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
                value={state.lastName}
                onChange={(e) =>
                  dispatch({
                    type: actionTypes.lastName,
                    payload: e.target.value,
                  })
                }
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
                value={state.mobile}
                onChange={(e) =>
                  dispatch({
                    type: actionTypes.mobile,
                    payload: e.target.value,
                  })
                }
                className="rounded border bg-slate-50 px-4 py-2"
                type="text"
                name="number"
                id="number"
                placeholder="+91 not required"
              />
            </label>
            <label className="grid gap-2 text-slate-600" htmlFor="firstname">
              Email
              <input
                value={state.email}
                onChange={(e) =>
                  dispatch({
                    type: actionTypes.email,
                    payload: e.target.value,
                  })
                }
                className="rounded border bg-slate-50 px-4 py-2"
                type="text"
                name="email"
                id="email"
                placeholder="example@email.com"
              />
            </label>
            <label className="grid gap-2 text-slate-600" htmlFor="firstname">
              Permanent Address
              <input
                value={state.address}
                onChange={(e) =>
                  dispatch({
                    type: actionTypes.address,
                    payload: e.target.value,
                  })
                }
                className="rounded border bg-slate-50 px-4 py-2"
                type="text"
                name="address"
                id="address"
                placeholder="enter detailed address"
              />
            </label>
            <label className="grid gap-2 text-slate-600" htmlFor="firstname">
              Adhaar number
              <input
                value={state.aadhar}
                onChange={(e) =>
                  dispatch({
                    type: actionTypes.aadhar,
                    payload: e.target.value,
                  })
                }
                className="rounded border bg-slate-50 px-4 py-2"
                type="text"
                name="aadhar"
                id="aadhar"
                placeholder="14 digit adhar number"
              />
            </label>
            <label className="grid gap-2 text-slate-600" htmlFor="password">
              Password
              <div className="relative flex items-center">
                <input
                  value={state.password}
                  onChange={(e) =>
                    dispatch({
                      type: actionTypes.password,
                      payload: e.target.value,
                    })
                  }
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
