import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function CreatePostForm() {
  const [lang, setLang] = useState<string>("en");
  const [number, setNumber] = useState<string>("");
  const [mode, setMode] = useState<"detail" | "short">("detail");
  const [link, setLink] = useState<string>("");

  useEffect(() => {
    if (mode === "detail") setLink(`/create?no=${number}&lang=${lang}`);
    else setLink(`/chat?no=${number}&lang=${lang}`);
  }, [mode, number, lang]);

  return (
    <div className="mx-auto grid max-w-7xl rounded-md bg-sky-700 p-4 shadow-lg">
      <h3 className="pb-5 text-xl font-medium text-white">
        Create a new Feedback Post
      </h3>
      <div className="flex flex-wrap gap-2 text-sm max-sm:flex-col">
        <div className="flex-1 justify-between rounded-md border bg-slate-100 p-2 md:basis-64">
          <label className="flex flex-col justify-between gap-3" htmlFor="lang">
            1. Select Language
            <select
              onChange={(e) => setLang(e.target.value)}
              name="lang"
              id="lang"
              value={lang}
              className="rounded border bg-white px-3 py-2 text-black"
            >
              <option value="en">English</option>
              <option value="hn">Hindi</option>
              <option value="ur">Urdu</option>
            </select>
          </label>
        </div>
        <div className="flex-1 justify-between rounded-md border bg-slate-100 p-2 md:basis-64">
          <label
            className="flex flex-col justify-between gap-3"
            htmlFor="number"
          >
            2. Enter Your Number
            <input
              onChange={(e) => setNumber(e.target.value)}
              type="text"
              id="number"
              value={number}
              name="number"
              placeholder="type here"
              className="rounded border bg-white px-3 py-2 text-black"
            />
          </label>
        </div>
        <div className="flex-1 justify-between rounded-md border bg-slate-100 p-2 md:basis-64">
          <div className="flex flex-col justify-between gap-3">
            3. Select Mode
            <div className="flex gap-2">
              <label
                htmlFor="detail"
                className="flex flex-1 cursor-pointer items-center gap-2 rounded bg-white p-2"
              >
                <input
                  defaultChecked
                  onClick={() => setMode("detail")}
                  className="h-6 w-6 accent-sky-600"
                  type="radio"
                  name="assist"
                  id="detail"
                  value="detail"
                />
                detailed post
              </label>
              <label
                htmlFor="short"
                className="flex flex-1 cursor-pointer items-center gap-2 rounded bg-white p-2"
              >
                <input
                  onClick={() => setMode("short")}
                  className="h-6 w-6 accent-sky-600"
                  type="radio"
                  name="assist"
                  id="short"
                  value="short"
                />
                Short Post
              </label>
            </div>
          </div>
        </div>
        <div className="flex-1 justify-between rounded-md border bg-slate-100 p-2 md:basis-64">
          <label className="flex flex-col justify-between gap-3" htmlFor="lang">
            4. Next
            <Link
              to={link}
              className="rounded bg-sky-600 px-3 py-2 text-center font-medium text-white hover:bg-sky-500"
            >
              Go
            </Link>
          </label>
        </div>
      </div>
    </div>
  );
}
