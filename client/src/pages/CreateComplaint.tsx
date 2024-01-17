import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import { IconLeftArrow } from "./CreateNewPost";

function CreateComplaint() {
  const [stations, setStations] = useState([]);
  const [station, setStation] = useState("");
  const [problem, setProblem] = useState("");

  // [TODO) useEffect to set all station for dropdown and handle submit

  return (
    <motion.main
      initial={{ x: 200, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      <div className="mx-auto max-w-7xl pb-10">
        <div className="flex items-center py-4 text-lg">
          <Link
            to={".."}
            className="flex items-center gap-2 rounded px-3 py-2 hover:bg-white"
          >
            <IconLeftArrow />
            go back
          </Link>
          <h2 className="flex-1 pl-4 font-bold">Submit a complaint</h2>
        </div>
        <form className="mx-auto grid max-w-5xl gap-3 px-3 text-sm">
          <label
            htmlFor="station"
            className="flex w-full items-center gap-4 rounded-lg border bg-white p-3 shadow-md"
          >
            <span className="whitespace-nowrap">select police station:</span>
            <select
              name="station"
              id="station"
              defaultValue={station}
              onChange={(e) => setStation(e.target.value)}
              className="w-full rounded-md border px-3 py-2"
            >
              {stations.map((station) => (
                <option value={station.id}>{station.name}</option>
              ))}
            </select>
          </label>
          <label
            htmlFor="problem"
            className="grid gap-4 rounded-lg border bg-white p-3 shadow-md"
          >
            problem or query:
            <textarea
              value={problem}
              onChange={(e) => setProblem(e.target.value)}
              name="problem"
              id="problem"
              className="w-full rounded border p-3 shadow-inner"
            >
              type your complaint here
            </textarea>
          </label>
          <button className="w-full rounded-md bg-sky-600 py-3 text-lg font-medium text-white hover:bg-sky-500 hover:shadow-md">
            submit
          </button>
        </form>
      </div>
    </motion.main>
  );
}
export default CreateComplaint;
