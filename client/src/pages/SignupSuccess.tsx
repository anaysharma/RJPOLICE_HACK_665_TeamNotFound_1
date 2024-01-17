import { Link } from "react-router-dom";

function SignupSuccess() {
  return (
    <div className="grid h-svh place-content-center gap-10 text-center text-2xl text-green-600">
      <span className="text-xl font-medium text-slate-700">
        Rajasthan Police Feedback hub
      </span>
      <div className="grid gap-6 rounded-lg border bg-slate-100 p-8 shadow-lg">
        Registraion Successful!
        <Link
          to="/login"
          className="mx-auto flex w-fit justify-center rounded-md bg-sky-600 px-10 py-3 text-base font-medium text-white"
        >
          Login
        </Link>
      </div>
    </div>
  );
}
export default SignupSuccess;
