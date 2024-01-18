import axios from "axios";
import { useEffect, useState } from "react";

function Complaints() {
  const [all, setAll] = useState<any[]>([]);
  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:3000/api/v1/complain/all",
    })
      .then((res) => res.data)
      .then((data) => setAll(data.data));
  });
  return (
    <div className="mx-auto max-w-5xl p-4">
      <span className="block py-5 text-xl font-bold">
        all complains in your district
      </span>
      <ul className="grid rounded-md border bg-white shadow-md">
        {all.map((comp, idx) => (
          <li className="border-b p-3 even:bg-slate-50" key={idx}>
            {comp.problem}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Complaints;
