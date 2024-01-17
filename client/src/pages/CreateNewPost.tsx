import axios from "axios";
import { motion } from "framer-motion";
import { useEffect, useReducer, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import FeedbackQuestion from "../components/FeedbackQuestion";
import questions from "../data/questions.json";
import getUser from "../utils/getUser";
import setDocumentTitle from "../utils/setDocumentTitle";

interface stateTypes {
  q1: number;
  q2: number;
  q3: number;
  q4: number;
  q5: number;
  q6: number;
  q7: number;
  query: string;
  stations: string;
}

const initialState: stateTypes = {
  q1: 0,
  q2: 0,
  q3: 0,
  q4: 0,
  q5: 0,
  q6: 0,
  q7: 0,
  query: "",
  stations: "",
};

function reducer(
  state: stateTypes,
  { type, payload }: { type: string; payload: string | number },
) {
  const newState = JSON.parse(JSON.stringify(state));
  newState[type] = payload;
  return newState;
}
export default function CreateNewPost() {
  setDocumentTitle("New Post | Police Feedback Hub");
  const navigate = useNavigate();

  const [userID, setUserID] = useState<string>("");

  const [answers, dispatch] = useReducer(reducer, initialState);
  const [allStations, setAllStations] = useState<
    { name: string; _id: string }[]
  >([]);

  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:3000/api/v1/station/all",
    })
      .then((res) => res.data)
      .then((data) => {
        setAllStations(data.data);
        dispatch({ type: "stations", payload: data.data[0]._id });
      });

    async function getid() {
      const user = await getUser();
      setUserID(user.user._id);
    }

    getid();
  }, []);

  useEffect(() => console.log(answers, userID), [answers, userID]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios({
      method: "post",
      url: "http://localhost:3000/api/v1/feedback",
      data: {
        ...answers,
        users: userID,
      },
    }).then(() => navigate("/success"));
  };

  return (
    <motion.main
      initial={{ x: 200, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center py-4 text-lg">
          <Link
            to={".."}
            className="flex items-center gap-2 rounded px-3 py-2 hover:bg-white"
          >
            <IconLeftArrow />
            go back
          </Link>
          <h2 className="flex-1 pl-4 font-bold">Create new feedback post</h2>
        </div>
        <form
          className="mx-auto grid max-w-5xl gap-3 px-3 text-sm"
          onSubmit={handleSubmit}
        >
          <label
            htmlFor="station"
            className="flex w-full items-center gap-4 rounded-lg border bg-white p-3 shadow-md"
          >
            <span className="whitespace-nowrap">select police station:</span>
            <select
              name="station"
              id="station"
              onChange={(e) =>
                dispatch({ type: "stations", payload: e.target.value })
              }
              className="w-full rounded-md border px-3 py-2"
            >
              {allStations.map((station, idx) => (
                <option value={station._id} key={idx}>
                  {station.name}
                </option>
              ))}
            </select>
          </label>
          {questions.questions.map((que, idx) => (
            <FeedbackQuestion
              srno={idx}
              setAns={dispatch}
              question={que.question}
              option={que.options}
              key={`sdkjfbkjasdfjhkb${idx}`}
            />
          ))}
          <div className="overflow-hidden rounded-md border bg-white shadow">
            <span className="flex w-full items-start border-b bg-slate-50 px-4 py-3 font-bold md:items-center">
              Attach files
            </span>
            <div className="flex gap-4 p-4 ">
              <label
                htmlFor="image-input"
                className="flex flex-1 cursor-pointer items-center justify-center gap-2 rounded border bg-sky-50 p-3 text-sky-600 hover:bg-sky-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h9v2H5v14h14v-9h2v9q0 .825-.587 1.413T19 21zM17 9V7h-2V5h2V3h2v2h2v2h-2v2zM6 17h12l-3.75-5l-3 4L9 13zM5 5v14z"
                  ></path>
                </svg>
                <span className="max-sm:hidden">Image</span>
                <input
                  accept="image/*"
                  type="file"
                  id="image-input"
                  name="image-input"
                  className="w-0"
                />
              </label>
              <label
                htmlFor="video-input"
                className="flex flex-1 cursor-pointer items-center justify-center gap-2 rounded border bg-green-50 p-3 text-green-600 hover:bg-green-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M9 16h2v-3h3v-2h-3V8H9v3H6v2h3zm-5 4q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h12q.825 0 1.413.588T18 6v4.5l4-4v11l-4-4V18q0 .825-.587 1.413T16 20zm0-2h12V6H4zm0 0V6z"
                  ></path>
                </svg>
                <span className="max-sm:hidden">video</span>
                <input
                  type="file"
                  accept="video/*"
                  id="video-input"
                  name="video-input"
                  className="w-0"
                />
              </label>

              <label
                htmlFor="audio-input"
                className="flex flex-1 cursor-pointer items-center justify-center gap-2 rounded border bg-amber-50 p-3 text-amber-600 hover:bg-amber-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8zM6 20V4h7v5h5v11zm10-9h-4v3.88a2.247 2.247 0 0 0-3.5 1.87c0 1.24 1.01 2.25 2.25 2.25S13 17.99 13 16.75V13h3z"
                  ></path>
                </svg>
                <span className="max-sm:hidden">audio</span>
                <input
                  type="file"
                  accept="audio/*"
                  id="audio-input"
                  name="audio-input"
                  className="w-0"
                />
              </label>
              <label
                htmlFor="document-input"
                className="flex flex-1 cursor-pointer items-center justify-center gap-2 rounded border bg-rose-50 p-3 text-rose-600 hover:bg-rose-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M23 18h-3v-3h-2v3h-3v2h3v3h2v-3h3M6 2a2 2 0 0 0-2 2v16c0 1.11.89 2 2 2h7.81c-.36-.62-.61-1.3-.73-2H6V4h7v5h5v4.08c.33-.05.67-.08 1-.08c.34 0 .67.03 1 .08V8l-6-6M8 12v2h8v-2m-8 4v2h5v-2Z"
                  ></path>
                </svg>
                <span className="max-sm:hidden">document</span>
                <input
                  type="file"
                  id="document-input"
                  name="document-input"
                  className="w-0"
                />
              </label>
            </div>
          </div>
          <div
            id="other"
            className="overflow-hidden rounded-md bg-white shadow"
          >
            <label
              htmlFor="other"
              className="flex w-full flex-col gap-3 border-b px-4 py-3 font-bold"
            >
              Please share any specific feedback you have about your experience,
              either positive or constructive [300 words] (optional)
              <textarea
                maxLength={300}
                name="other"
                id="other"
                cols={30}
                rows={5}
                value={answers.query}
                onChange={(e) =>
                  dispatch({ type: "query", payload: e.target.value })
                }
                className="rounded border px-3 py-1 font-normal shadow-inner"
                placeholder="start typing here"
              >
                {answers.query}
              </textarea>
            </label>
          </div>
          <div className="mb-6 flex justify-center gap-4 rounded bg-white py-6">
            <button
              type="button"
              className="rounded border-2 border-sky-600 px-10 py-1 text-sky-700 hover:border-sky-500 hover:bg-sky-500 hover:text-white"
              onClick={() => navigate(-1)}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded border-2 border-sky-600 bg-sky-600 px-10 py-1 text-white hover:border-sky-500 hover:bg-sky-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </motion.main>
  );
}

export const IconLeftArrow = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1.3rem"
    height="1.3rem"
    viewBox="0 0 24 24"
  >
    <path
      fill="currentColor"
      d="m10 18l-6-6l6-6l1.4 1.45L7.85 11H20v2H7.85l3.55 3.55z"
    ></path>
  </svg>
);
