import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import questions from "../data/questions.json";
import FeedbackQuestion from "../components/FeedbackQuestion";
import setDocumentTitle from "../utils/setDocumentTitle";
import { useNavigate } from "react-router-dom";
export default function CreateNewPost() {
  setDocumentTitle("New Post | Police Feedback Hub");
  const navigate = useNavigate();
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
        <form className="mx-auto grid max-w-5xl gap-3 px-3 text-sm">
          {questions.questions.map((que, idx) => (
            <FeedbackQuestion
              srno={idx + 1}
              question={que.question}
              option={que.options}
              key={`sdkjfbkjasdfjhkb${idx}`}
            />
          ))}
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
                className="rounded border px-3 py-1 shadow-inner"
                placeholder="start typing here"
              ></textarea>
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
              onClick={(e) => {
                e.preventDefault();
                navigate("/success");
              }}
              type="button"
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
