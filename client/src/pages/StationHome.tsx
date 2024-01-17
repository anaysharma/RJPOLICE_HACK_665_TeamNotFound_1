import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import question from "../data/questions.json";

function StationHome() {
  const [allStations, setAllStations] = useState<
    { name: string; _id: string }[]
  >([]);
  const [selectedStation, setSelectedStation] = useState<string>("");
  const [feedbacks, setFeedbacks] = useState<any[]>([]);

  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:3000/api/v1/station/all",
    })
      .then((res) => res.data)
      .then((data) => {
        setAllStations(data.data);
      });
  }, []);

  useEffect(() => {
    axios({
      method: "get",
      url: `http://localhost:3000/api/v1/stationFeed/${selectedStation}`,
    })
      .then((res) => res.data)
      .then((data) => {
        setFeedbacks(data.data);
        console.log(data.data[0].q1);
      });
  }, [selectedStation]);

  return (
    <div className="pb-1">
      <Header />
      <div className="mx-auto my-10 max-w-5xl overflow-hidden rounded-md border bg-white shadow-md">
        <h1 className="p-4 pb-6 text-2xl">Get Station wise feedbacks</h1>
        <label
          htmlFor="station"
          className="flex w-full items-center gap-4 px-4"
        >
          <span className="whitespace-nowrap">select police station:</span>
          <select
            name="station"
            id="station"
            onChange={(e) => setSelectedStation(e.target.value)}
            className="w-full rounded-md border px-3 py-2"
          >
            {allStations.map((station, idx) => (
              <option value={station._id} key={idx}>
                {station.name}
              </option>
            ))}
          </select>
        </label>
        <div className="mt-4 border-t bg-slate-50 p-4 font-medium text-sky-600">
          all feedbacks found:
          <div className="mt-4 grid gap-4 text-black">
            {feedbacks.map((feed, idx) => (
              <div
                key={idx}
                className="grid gap-2 overflow-hidden rounded-md border bg-white p-2 shadow-md"
              >
                <span className="w-fit rounded bg-sky-100 px-1">
                  date: {feed.date}
                </span>
                <span className="p-2">{feed.query}</span>
                <ul className="grid gap-2">
                  <li className="grid rounded border p-1">
                    <span className="px-2 font-bold">
                      {question.questions[0].question}
                    </span>
                    <RatinStar rate={feed.q1} />
                  </li>
                  <li className="grid rounded border p-1">
                    <span className="px-2 font-bold">
                      {question.questions[1].question}
                    </span>
                    <RatinStar rate={feed.q2} />
                  </li>
                  <li className="grid rounded border p-1">
                    <span className="px-2 font-bold">
                      {question.questions[2].question}
                    </span>
                    <RatinStar rate={feed.q3} />
                  </li>
                  <li className="grid rounded border p-1">
                    <span className="px-2 font-bold">
                      {question.questions[3].question}
                    </span>
                    <RatinStar rate={feed.q4} />
                  </li>
                  <li className="grid rounded border p-1">
                    <span className="px-2 font-bold">
                      {question.questions[4].question}
                    </span>
                    <RatinStar rate={feed.q5} />
                  </li>
                  <li className="grid rounded border p-1">
                    <span className="px-2 font-bold">
                      {question.questions[5].question}
                    </span>
                    <RatinStar rate={feed.q6} />
                  </li>
                  <li className="grid rounded border p-1">
                    <span className="px-2 font-bold">
                      {question.questions[6].question}
                    </span>
                    <RatinStar rate={feed.q7} />
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default StationHome;

export const RatinStar = (rate) => {
  const rating = rate.rate > 5 ? 5 : rate.rate;
  return (
    <span className="relative mx-2 my-1 text-xl">
      <span className="flex text-amber-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="m22 9.24l-7.19-.62L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21L12 17.27L18.18 21l-1.63-7.03zM12 15.4l-3.76 2.27l1-4.28l-3.32-2.88l4.38-.38L12 6.1l1.71 4.04l4.38.38l-3.32 2.88l1 4.28z"
          ></path>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="m22 9.24l-7.19-.62L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21L12 17.27L18.18 21l-1.63-7.03zM12 15.4l-3.76 2.27l1-4.28l-3.32-2.88l4.38-.38L12 6.1l1.71 4.04l4.38.38l-3.32 2.88l1 4.28z"
          ></path>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="m22 9.24l-7.19-.62L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21L12 17.27L18.18 21l-1.63-7.03zM12 15.4l-3.76 2.27l1-4.28l-3.32-2.88l4.38-.38L12 6.1l1.71 4.04l4.38.38l-3.32 2.88l1 4.28z"
          ></path>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="m22 9.24l-7.19-.62L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21L12 17.27L18.18 21l-1.63-7.03zM12 15.4l-3.76 2.27l1-4.28l-3.32-2.88l4.38-.38L12 6.1l1.71 4.04l4.38.38l-3.32 2.88l1 4.28z"
          ></path>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="m22 9.24l-7.19-.62L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21L12 17.27L18.18 21l-1.63-7.03zM12 15.4l-3.76 2.27l1-4.28l-3.32-2.88l4.38-.38L12 6.1l1.71 4.04l4.38.38l-3.32 2.88l1 4.28z"
          ></path>
        </svg>
      </span>
      <span className="absolute left-0 top-0 flex text-amber-500">
        {new Array(rating).fill(0).map(() => (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21z"
            ></path>
          </svg>
        ))}
      </span>
    </span>
  );
};
