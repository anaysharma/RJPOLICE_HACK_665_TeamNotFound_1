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
    <div className="mx-auto max-w-5xl py-10">
      <div className="m-3 overflow-hidden rounded-md border bg-white shadow-md ">
        <span className="mb-4 block border-b bg-slate-50 p-4 text-2xl font-bold">
          {name}
        </span>
        {station[name] && (
          <div className="flex flex-col">
            <Bar rating={station[name].q1} label="interaction" />
            <Bar rating={station[name].q2} label="waiting time" />
            <Bar rating={station[name].q3} label="professionlism" />
            <Bar rating={station[name].q4} label="communication" />
            <Bar rating={station[name].q5} label="report updates" />
            <Bar rating={station[name].q6} label="treatment" />
            <Bar rating={station[name].q7} label="experience" />
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
    <div className="flex flex-col gap-2 p-4">
      <span className="font-bold capitalize text-slate-600">{label}</span>
      <div className="h-6 w-full overflow-hidden rounded bg-slate-100 shadow-inner">
        <div
          style={{
            width: percent + "%",
            backgroundColor: `hsl(${percent - 10}, 90%, 50%)`,
          }}
          className="h-full shadow-inner"
        ></div>
      </div>
    </div>
  );
};
