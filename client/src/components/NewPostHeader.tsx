import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function NewPostHeader() {
  const [inputVal, setInputVal] = useState<string>("");
  const [url, setUrl] = useState<string>("");

  useEffect(() => setUrl(`/create?q=${inputVal}`), [inputVal, setUrl]);

  return (
    <div className="top-16 grid rounded-md bg-white shadow-lg lg:sticky ">
      <div className="flex gap-2 border-b p-2 max-sm:flex-col">
        <input
          onChange={(e) => setInputVal(e.target.value)}
          value={inputVal}
          type="text"
          className="w-full rounded border bg-slate-50 px-3 py-2 shadow-inner"
          placeholder="start typing to create a post"
        />
        <Link
          to={url}
          className="rounded bg-sky-600 px-10 py-2 font-medium text-white hover:bg-sky-500"
        >
          Create
        </Link>
      </div>
      <div className="flex gap-2 p-2">
        <label
          htmlFor="image-input"
          className="flex flex-1 cursor-pointer items-center justify-center gap-2 rounded border bg-sky-50 px-3 py-1 text-sky-600 hover:bg-sky-100"
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
          className="flex flex-1 cursor-pointer items-center justify-center gap-2 rounded border bg-green-50 px-3 py-1 text-green-600 hover:bg-green-100"
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
          className="flex flex-1 cursor-pointer items-center justify-center gap-2 rounded border bg-amber-50 px-3 py-1 text-amber-600 hover:bg-amber-100"
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
          className="flex flex-1 cursor-pointer items-center justify-center gap-2 rounded border bg-rose-50 px-3 py-1 text-rose-600 hover:bg-rose-100"
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
  );
}
