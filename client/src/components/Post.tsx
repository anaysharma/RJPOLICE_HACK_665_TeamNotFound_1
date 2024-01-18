import { Link } from "react-router-dom";

interface PostProps {
  votes: number;
  image?: string;
  title: string;
  content: string;
  attachments?: string[];
  userIcon?: string;
  userName: string;
  id: string;
}

export default function Post({
  votes,
  image,
  title,
  content,
  id,
  userIcon,
  userName,
}: PostProps) {
  return (
    <div className="overflow-hidden rounded-md border bg-white shadow-md">
      <div className="grid border-b bg-slate-50 px-3 py-2">
        <span>
          {userIcon && <img src={userIcon} />}
          <span className="text-sm text-slate-600">{userName}</span>
        </span>
        <span className="text-lg font-bold">{title}</span>
      </div>
      <Link
        to={`/post/${id}`}
        className="m-3 grid overflow-hidden rounded border"
      >
        {image && (
          <img src={image} className="w-full object-cover object-top" />
        )}
        <p className="p-2">{content}</p>
      </Link>
      <div className="flex justify-between p-3 pt-0">
        <div className="flex items-center gap-2 overflow-hidden rounded border">
          <button className="flex items-center justify-center border-r border-r-green-300 bg-green-100 p-2 text-green-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.2em"
              height="1.2em"
              viewBox="0 0 24 24"
            >
              <path
                d="M4 21h1V8H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2zM20 8h-7l1.122-3.368A2 2 0 0 0 12.225 2H12L7 7.438V21h11l3.912-8.596L22 12v-2a2 2 0 0 0-2-2z"
                fill="currentColor"
              ></path>
            </svg>
          </button>
          {votes}
          <button className="flex items-center justify-center border-l border-l-amber-300 bg-amber-100 p-2 text-amber-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.2em"
              height="1.2em"
              viewBox="0 0 24 24"
            >
              <path
                d="M20 3h-1v13h1a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zM4 16h7l-1.122 3.368A2 2 0 0 0 11.775 22H12l5-5.438V3H6l-3.937 8.649l-.063.293V14a2 2 0 0 0 2 2z"
                fill="currentColor"
              ></path>
            </svg>
          </button>
        </div>
        <div className="flex items-center overflow-hidden rounded border">
          <button className="flex w-10 items-center justify-center border-r bg-slate-50 p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.2em"
              height="1.2em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4zM18 14H6v-2h12zm0-3H6V9h12zm0-3H6V6h12z"
              ></path>
            </svg>
          </button>
          <button className="flex w-10 items-center justify-center border-r bg-slate-50 p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.2em"
              height="1.2em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M18 22q-1.25 0-2.125-.875T15 19q0-.175.025-.363t.075-.337l-7.05-4.1q-.425.375-.95.588T6 15q-1.25 0-2.125-.875T3 12q0-1.25.875-2.125T6 9q.575 0 1.1.213t.95.587l7.05-4.1q-.05-.15-.075-.337T15 5q0-1.25.875-2.125T18 2q1.25 0 2.125.875T21 5q0 1.25-.875 2.125T18 8q-.575 0-1.1-.212t-.95-.588L8.9 11.3q.05.15.075.338T9 12q0 .175-.025.363T8.9 12.7l7.05 4.1q.425-.375.95-.587T18 16q1.25 0 2.125.875T21 19q0 1.25-.875 2.125T18 22"
              ></path>
            </svg>
          </button>
          <button
            className="flex w-10 items-center justify-center bg-slate-50 p-2"
            title="subscribe to this post"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.2em"
              height="1.2em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M5 19q-.425 0-.712-.288T4 18q0-.425.288-.712T5 17h1v-7q0-2.075 1.25-3.687T10.5 4.2v-.7q0-.625.438-1.062T12 2q.625 0 1.063.438T13.5 3.5v.7q2 .5 3.25 2.113T18 10v7h1q.425 0 .713.288T20 18q0 .425-.288.713T19 19zm7 3q-.825 0-1.412-.587T10 20h4q0 .825-.587 1.413T12 22m-1-9v1q0 .425.288.713T12 15q.425 0 .713-.288T13 14v-1h1q.425 0 .713-.288T15 12q0-.425-.288-.712T14 11h-1v-1q0-.425-.288-.712T12 9q-.425 0-.712.288T11 10v1h-1q-.425 0-.712.288T9 12q0 .425.288.713T10 13z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
