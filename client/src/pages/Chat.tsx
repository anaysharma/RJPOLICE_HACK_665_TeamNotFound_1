import { useState } from "react";

export default function Chat(): JSX.Element {
  const [messages, setMessages] = useState<string[]>([]);
  const [inputVal, setInputVal] = useState<string>("");

  return (
    <main>
      <div className="mx-auto grid max-w-4xl gap-4 p-4 py-5">
        <div className="grid gap-3 rounded-lg bg-sky-100 p-6 shadow-md">
          <h2 className="text-xl font-bold text-sky-600">
            welcome to chat assisted feedback submission
          </h2>
          <p>
            this is the start of your conversation with AI enabled automatic
            feedback submission system, be clear and concise with response for
            best results.
          </p>
        </div>
        <div className="rounded-lg bg-white p-4 shadow-md">
          <div className="grid gap-3">
            <BlueBox text="Hello!" time="2 Jan, 2024" />
            <BlueBox
              text="Please start with stating the query."
              time="2 Jan, 2024"
            />
            {messages.map((mssg) => (
              <WhiteBox
                text={mssg}
                time={new Date().toDateString()}
                status="delivered"
              />
            ))}
          </div>
          <div className="mt-4 flex gap-2 rounded-lg bg-slate-100 p-2 shadow">
            <textarea
              value={inputVal}
              onChange={(e) => {
                setInputVal(e.target.value);
                e.target.style.height = `${e.target.scrollHeight}px`;
              }}
              placeholder="type here"
              rows={1}
              className="flex-1 overflow-hidden rounded-md border bg-white px-3 py-2 shadow-inner"
            />
            <button
              className="flex items-center justify-center gap-2 rounded-md bg-sky-600 px-3 py-2 text-white shadow-md hover:bg-sky-500 hover:shadow-lg"
              onClick={() =>
                inputVal &&
                (setMessages((prev) => [...prev, inputVal]), setInputVal(""))
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 14 14"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M13.854.146a.5.5 0 0 1 .113.534l-5 13a.5.5 0 0 1-.922.027l-2.091-4.6L9.03 6.03a.75.75 0 0 0-1.06-1.06L4.893 8.046l-4.6-2.09a.5.5 0 0 1 .028-.923l13-5a.5.5 0 0 1 .533.113"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="max-sm:hidden">Send</span>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
interface blueBoxProps {
  text: string;
  time: string;
  image?: string;
}

const BlueBox = ({ text, time, image }: blueBoxProps): JSX.Element => {
  return (
    <div className="flex items-end gap-2 pr-10">
      <img
        src={image ? image : "/logo.png"}
        alt="responder's image"
        className="h-8"
      />
      <div className="grid w-fit max-w-lg rounded-e-lg rounded-tl-lg bg-sky-600 px-2 py-1 shadow">
        <p className="text-white">{text}</p>
        <span className="ml-auto text-xs text-white/80">{time}</span>
      </div>
    </div>
  );
};

interface WhiteBoxProps {
  text: string;
  time: string;
  status: "seen" | "delivered";
}

const WhiteBox = ({ text, time, status }: WhiteBoxProps): JSX.Element => {
  return (
    <div className="flex items-end justify-end gap-2 pl-10">
      <div className="grid w-fit max-w-lg rounded-s-lg rounded-tr-lg bg-slate-100 px-2 py-1 shadow">
        <p className="">{text}</p>
        <span className="ml-auto text-xs text-slate-500">{time}</span>
      </div>
      {status == "delivered" ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <path
            fill="#0a80d5"
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2M9.29 16.29L5.7 12.7a.996.996 0 1 1 1.41-1.41L10 14.17l6.88-6.88a.996.996 0 1 1 1.41 1.41l-7.59 7.59a.996.996 0 0 1-1.41 0"
          ></path>
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <path
            fill="#0a80d5"
            d="M16.59 7.58L10 14.17l-3.59-3.58L5 12l5 5l8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8s8 3.58 8 8s-3.58 8-8 8"
          ></path>
        </svg>
      )}
    </div>
  );
};
