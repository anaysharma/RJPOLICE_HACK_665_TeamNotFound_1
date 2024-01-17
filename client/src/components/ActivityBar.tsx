// get qr code
// scan qr
// voice
// language
// chat
// helpline

import { Link } from "react-router-dom";

export default function ActivityBar() {
  return (
    <aside className="fixed h-fit min-w-fit overflow-hidden rounded-md bg-white shadow-md max-sm:bottom-2 max-sm:left-2 max-sm:right-2 max-sm:z-[100] max-sm:border sm:sticky md:top-28 lg:top-16">
      <div className="flex gap-2 p-2 sm:flex-col">
        <ActivityBarButton
          title="Generate QR code"
          href="/"
          Icon={IconGenerateQr}
        />
        <ActivityBarButton title="Scan QR code" href="/" Icon={IconScanQr} />
        <ActivityBarButton
          title="Add a voice complaint"
          href="/"
          Icon={IconVoice}
        />
        <ActivityBarButton title="Choose Language" href="/" Icon={IconLang} />
        <ActivityBarButton
          title="Chat for assistance"
          href="/"
          Icon={IconChat}
        />
        <ActivityBarButton title="Call the helpline" href="/" Icon={IconHelp} />
      </div>
    </aside>
  );
}

const ActivityBarButton = ({
  title,
  href,
  Icon,
}: {
  title: string;
  href: string;
  Icon: () => JSX.Element;
}) => (
  <Link
    to={href}
    title={title}
    className="block flex justify-center rounded bg-slate-50 p-3 text-slate-700 hover:bg-sky-50 hover:text-sky-600 max-sm:flex-1"
  >
    {<Icon />}
  </Link>
);

const IconGenerateQr = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="2em"
    height="2em"
    viewBox="0 0 24 24"
  >
    <path
      fill="currentColor"
      d="M5 14v-2h2v2zm-2-2v-2h2v2zm9-7V3h2v2zM4.5 7.5h3v-3h-3zM3 9V3h6v6zm1.5 10.5h3v-3h-3zM3 21v-6h6v6zM16.5 7.5h3v-3h-3zM15 9V3h6v6zm-6 5v-2H7v-2h4v4zm1-5V5h2v2h2v2zM5.25 6.75v-1.5h1.5v1.5zm0 12v-1.5h1.5v1.5zm12-12v-1.5h1.5v1.5zM16 21v-3h-3v-2h3v-3h2v3h3v2h-3v3z"
    ></path>
  </svg>
);

const IconScanQr = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="2em"
    height="2em"
    viewBox="0 0 24 24"
  >
    <path
      fill="currentColor"
      d="M15 3h6v5h-2V5h-4zM9 3v2H5v3H3V3zm6 18v-2h4v-3h2v5zm-6 0H3v-5h2v3h4zM3 11h18v2H3z"
    ></path>
  </svg>
);

const IconVoice = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="2em"
    height="2em"
    viewBox="0 0 24 24"
  >
    <path
      fill="currentColor"
      d="M8 24q-.425 0-.712-.288T7 23q0-.425.288-.712T8 22q.425 0 .713.288T9 23q0 .425-.288.713T8 24m4 0q-.425 0-.712-.288T11 23q0-.425.288-.712T12 22q.425 0 .713.288T13 23q0 .425-.288.713T12 24m4 0q-.425 0-.712-.288T15 23q0-.425.288-.712T16 22q.425 0 .713.288T17 23q0 .425-.288.713T16 24m-4-10q-1.25 0-2.125-.875T9 11V5q0-1.25.875-2.125T12 2q1.25 0 2.125.875T15 5v6q0 1.25-.875 2.125T12 14m-1 7v-3.1q-2.6-.35-4.3-2.312T5 11h2q0 2.075 1.463 3.538T12 16q2.075 0 3.538-1.463T17 11h2q0 2.625-1.7 4.588T13 17.9V21z"
    ></path>
  </svg>
);

const IconLang = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="2em"
    height="2em"
    viewBox="0 0 24 24"
  >
    <path
      fill="currentColor"
      d="M12 22q-2.05 0-3.875-.788t-3.187-2.15q-1.363-1.362-2.15-3.187T2 12q0-2.075.788-3.887t2.15-3.175Q6.3 3.575 8.124 2.788T12 2q2.075 0 3.888.788t3.174 2.15q1.363 1.362 2.15 3.175T22 12q0 2.05-.788 3.875t-2.15 3.188q-1.362 1.362-3.175 2.15T12 22m0-2.05q.65-.9 1.125-1.875T13.9 16h-3.8q.3 1.1.775 2.075T12 19.95m-2.6-.4q-.45-.825-.787-1.713T8.05 16H5.1q.725 1.25 1.813 2.175T9.4 19.55m5.2 0q1.4-.45 2.488-1.375T18.9 16h-2.95q-.225.95-.562 1.838T14.6 19.55M4.25 14h3.4q-.075-.5-.112-.987T7.5 12q0-.525.038-1.012T7.65 10h-3.4q-.125.5-.187.988T4 12q0 .525.063 1.013T4.25 14m5.4 0h4.7q.075-.5.113-.987T14.5 12q0-.525-.038-1.012T14.35 10h-4.7q-.075.5-.112.988T9.5 12q0 .525.038 1.013T9.65 14m6.7 0h3.4q.125-.5.188-.987T20 12q0-.525-.062-1.012T19.75 10h-3.4q.075.5.113.988T16.5 12q0 .525-.038 1.013T16.35 14m-.4-6h2.95q-.725-1.25-1.812-2.175T14.6 4.45q.45.825.788 1.713T15.95 8M10.1 8h3.8q-.3-1.1-.775-2.075T12 4.05q-.65.9-1.125 1.875T10.1 8m-5 0h2.95q.225-.95.563-1.838T9.4 4.45Q8 4.9 6.912 5.825T5.1 8"
    ></path>
  </svg>
);

const IconChat = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="2em"
    height="2em"
    viewBox="0 0 24 24"
  >
    <path
      fill="currentColor"
      d="M2 22V9q0-.825.588-1.413Q3.175 7 4 7h2v5q0 .825.588 1.412Q7.175 14 8 14h10v3q0 .825-.587 1.413Q16.825 19 16 19H5Zm16-8V9q0-.825-.587-1.413Q16.825 7 16 7H6V4q0-.825.588-1.413Q7.175 2 8 2h12q.825 0 1.413.587Q22 3.175 22 4v8q0 .825-.587 1.412Q20.825 14 20 14Zm-6-3.5Zm0 0Z"
    ></path>
  </svg>
);

const IconHelp = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="2em"
    height="2em"
    viewBox="0 0 24 24"
  >
    <path
      fill="currentColor"
      d="M11 21v-2h8v-7.1q0-2.925-2.037-4.962T12 4.9q-2.925 0-4.962 2.038T5 11.9V18H4q-.825 0-1.412-.587T2 16v-2q0-.525.263-.987T3 12.275l.075-1.325q.2-1.7.988-3.15t1.975-2.525Q7.225 4.2 8.762 3.6T12 3q1.7 0 3.225.6t2.725 1.663q1.2 1.062 1.975 2.512t1 3.15l.075 1.3q.475.225.738.675t.262.95v2.3q0 .5-.262.95t-.738.675V19q0 .825-.587 1.413T19 21zm-2-7q-.425 0-.712-.288T8 13q0-.425.288-.712T9 12q.425 0 .713.288T10 13q0 .425-.288.713T9 14m6 0q-.425 0-.712-.288T14 13q0-.425.288-.712T15 12q.425 0 .713.288T16 13q0 .425-.288.713T15 14m-8.975-1.55Q5.85 9.8 7.625 7.9T12.05 6q2.225 0 3.913 1.412T18 11.026Q15.725 11 13.813 9.8t-2.938-3.25q-.4 2-1.687 3.563T6.025 12.45"
    ></path>
  </svg>
);
