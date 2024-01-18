import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Summary() {
  const [allDists, setAllDists] = useState<any[]>([]);
  const [selected, setSelected] = useState<string>();
  const [current, setCurrent] = useState<any[]>([]);

  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:3000/api/v1/district/all",
    })
      .then((res) => res.data)
      .then((data) => {
        setAllDists(data.data);
        setSelected(data.data[0]._id);
      });
  }, []);

  useEffect(() => {
    const curr = allDists.find((dist) => dist._id == selected);
    if (curr) {
      setCurrent(curr.stations);
    }
  }, [selected, allDists]);

  return (
    <div className="mx-auto max-w-5xl py-10">
      <div className=" rounded-md border bg-white pb-3 shadow-md">
        <div className="flex items-center gap-3 p-3">
          <label htmlFor="dist">select district for summary.</label>
          <select
            name="dist"
            id="dist"
            className="flex-1 rounded-md px-3 py-2"
            onChange={(e) => setSelected(e.target.value)}
          >
            {allDists.map((dist, idx) => (
              <option key={idx} value={dist._id}>
                {dist.name}
              </option>
            ))}
          </select>
        </div>
        <div className="grid gap-2 px-3">
          {current!.map((station, idx) => (
            <Link
              to={`station/?id=${station._id}`}
              key={idx}
              className="rounded-md bg-slate-100 px-3 py-1 hover:bg-slate-200 hover:shadow-md"
            >
              {station!.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Summary;
