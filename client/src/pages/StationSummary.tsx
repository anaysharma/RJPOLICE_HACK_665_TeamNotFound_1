import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

function StationSummary() {
  const [station, setStation] = useState({});
  const [params] = useSearchParams();
  const [name, setName] = useState<string | undefined>("");
  useEffect(() => {
    const n = Object.keys(station).at(0);
    setName(n);
  }, [station]);

  useEffect(() => {
    const id = params.get("id");

    axios({
      method: "get",
      url: "http://localhost:3000/api/v1/station/" + id,
    })
      .then((res) => res.data)
      .then((data) => setStation(data));
  }, [params]);

  return (
    <div className="mx-auto max-w-7xl py-10">
      <div className="m-3 overflow-hidden rounded-md border bg-white shadow-md ">
        <span className="block border-b bg-slate-50 p-4 text-2xl font-bold">
          {name}
        </span>
        {station[name] && (
          <div className="flex gap-4 p-4 max-lg:flex-col">
            <div className="flex flex-1 flex-col gap-4 lg:w-1/2">
              <Bar rating={station[name].q1} label="interaction" />
              <Bar rating={station[name].q2} label="waiting time" />
              <Bar rating={station[name].q3} label="professionlism" />
              <Bar rating={station[name].q4} label="communication" />
              <Bar rating={station[name].q5} label="report updates" />
              <Bar rating={station[name].q6} label="treatment" />
              <Bar rating={station[name].q7} label="experience" />
            </div>
            <div className="grid items-start gap-3 rounded-md lg:text-sm">
              {station[name].q1 < 3 && (
                <Tip
                  heading="bad interaction"
                  content="station and its operator are lacking in friendliness in interactio with community."
                />
              )}
              {station[name].q2 < 3 && (
                <Tip
                  heading="long waiting times"
                  content="the average time to take action is higher, resulting community members to wait for long."
                />
              )}
              {station[name].q3 < 3 && (
                <Tip
                  heading="lacking professinalism."
                  content="station and its operator are lacking in professionalism in behavior and actions."
                />
              )}
              {station[name].q4 < 3 && (
                <Tip
                  heading="lack of appropriate communication."
                  content="station and its operator are lacking in communication with concerned community members."
                />
              )}
              {station[name].q5 < 3 && (
                <Tip
                  heading="unsufficient follow-up information."
                  content="station and its operator are not providing regular updates regarding services and reports."
                />
              )}
              {station[name].q6 < 3 && (
                <Tip
                  heading="insufficient opportunity for concerned ones."
                  content="station operator are not providing enough opportunities to explain and express concerns."
                />
              )}
              {station[name].q7 < 3 && (
                <Tip
                  heading="sub-par experience and satifaction."
                  content="station and services lack satisfactory experiences."
                />
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
export default StationSummary;

const Bar = ({ rating, label }) => {
  const percent = (+rating / 5) * 100;

  return (
    <div className="flex flex-col gap-2">
      <span className="font-bold capitalize text-slate-600">{label}</span>
      <div className="h-6 w-full overflow-hidden rounded bg-slate-100 shadow-inner">
        <div
          style={{
            width: percent + "%",
            backgroundColor: `hsl(${percent - 10}, 90%, 60%)`,
          }}
          className="h-full shadow-inner"
        ></div>
      </div>
    </div>
  );
};

const Tip = ({ content, heading }) => (
  <div className="flex items-center gap-3 rounded bg-orange-200 p-3">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="2rem"
      height="2rem"
      className="text-orange-500"
      viewBox="0 0 24 24"
    >
      <g
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
      >
        <path d="M10.363 3.591L2.257 17.125a1.914 1.914 0 0 0 1.636 2.871h16.214a1.914 1.914 0 0 0 1.636-2.87L13.637 3.59a1.914 1.914 0 0 0-3.274 0zM12 9h.01"></path>
        <path d="M11 12h1v4h1"></path>
      </g>
    </svg>
    <div className="grid gap-1">
      <span className="font-bold capitalize text-orange-500">{heading}</span>
      <p className="capitalize">{content}</p>
    </div>
  </div>
);
